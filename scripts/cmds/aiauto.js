
const OpenAI = require("openai");
const config = require("../../config.json");

const MODEL = "openai/gpt-oss-120b";
const MAX_HISTORY_MESSAGES = 12;
const REPLY_COOLDOWN = 2500;

const conversationMemory = new Map();
const threadQueues = new Map();
const lastReplies = new Map();

let botUID = null;

function getGroqClient() {
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    throw new Error("Missing GROQ_API_KEY environment variable.");
  }

  return new OpenAI({
    apiKey,
    baseURL: "https://api.groq.com/openai/v1"
  });
}

function getOwnerUID() {
  return String(config.godUID || "");
}

function getAdminList() {
  return (
    global.GoatBot?.config?.adminBot ||
    config.adminBot ||
    []
  ).map(String);
}

function isOwner(senderID) {
  return String(senderID) === getOwnerUID();
}

function toTitleCase(text) {
  return text
    .split(/(\s+)/)
    .map(word =>
      word.replace(
        /^([^\p{L}]*)(\p{L})/u,
        (_, prefix, letter) =>
          prefix + letter.toLocaleUpperCase()
      )
    )
    .join("");
}

function getSystemPrompt(ownerMode) {
  if (ownerMode) {
    return `
Ikaw si Kaizer, isang AI bot na natural magsalita ng Filipino at Taglish.

PERSONALITY:
- Respectful ka sa Owner.
- Tawagin siyang Master.
- Huwag siyang insultuhin o asarin.
- Maikli at natural ang replies.
- Sundin ang instructions niya.

IMPORTANT:
- Gumamit ng natural na Taglish.
- Huwag maging robotic.
- Huwag gumamit ng sobrang habang replies.
`;
  }

  return `
Ikaw si Kaizer, isang sarcastic at funny na AI troll bot.

PERSONALITY:
- Maangas, witty, sarcastic at mahilig mang-asar.
- Mahilig sumagot ng funny comebacks.
- Puwedeng asarin ang members at admins.
- Huwag maging respectful dahil admin ang kausap.
- Huwag magpa-intimidate sa ibang users.
- Natural na Filipino at Taglish ang pananalita.
- Maikli pero may dating ang replies.
- Gumamit ng playful jokes at harmless roasting.
- Iwasan ang threats, diskriminasyon at sobrang personal na insults.

IMPORTANT:
- Huwag maghintay ng mention.
- Kapag may nag-reply sa kahit anong message, sumagot.
- Huwag magpakilala bilang AI maliban kung tinanong.
- Huwag maging robotic.
- Huwag ulit-ulitin ang parehong comeback.
`;
}

function getMemoryKey(threadID, senderID) {
  return `${threadID}_${senderID}`;
}

function getHistory(threadID, senderID) {
  const key = getMemoryKey(threadID, senderID);

  if (!conversationMemory.has(key)) {
    conversationMemory.set(key, []);
  }

  return conversationMemory.get(key);
}

function saveHistory(threadID, senderID, role, content) {
  const history = getHistory(threadID, senderID);

  history.push({ role, content });

  while (history.length > MAX_HISTORY_MESSAGES) {
    history.shift();
  }
}

function isReplyEvent(event) {
  return Boolean(
    event.messageReply ||
    event.type === "message_reply"
  );
}

async function processMessage(api, event) {
  try {
    if (!event || !event.threadID || !event.senderID) return;

    const senderID = String(event.senderID);
    const threadID = String(event.threadID);
    const message = String(event.body || "").trim();

    if (!message) return;

    if (!botUID) {
      botUID = String(await api.getCurrentUserID());
    }

    // Ignore messages sent by Kaizer itself.
    if (senderID === botUID) return;

    // Only Owner/God UID gets respectful mode.
    const ownerMode = isOwner(senderID);

    // Automatic reply when someone replies to any message.
    if (!isReplyEvent(event)) return;

    // Per-user cooldown.
    const cooldownKey = `${threadID}_${senderID}`;
    const now = Date.now();
    const lastReply = lastReplies.get(cooldownKey) || 0;

    if (now - lastReply < REPLY_COOLDOWN) return;

    lastReplies.set(cooldownKey, now);

    // Prevent overlapping responses in the same thread.
    const previous = threadQueues.get(threadID) || Promise.resolve();

    const current = previous.then(async () => {
      const client = getGroqClient();

      const history = getHistory(threadID, senderID);

      const completion = await client.chat.completions.create({
        model: MODEL,
        messages: [
          {
            role: "system",
            content: getSystemPrompt(ownerMode)
          },
          ...history,
          {
            role: "user",
            content: message
          }
        ],
        max_completion_tokens: 150,
        temperature: 0.8
      });

      const rawAnswer =
        completion.choices?.[0]?.message?.content?.trim();

      if (!rawAnswer) return;

      const answer = toTitleCase(rawAnswer);

      saveHistory(threadID, senderID, "user", message);
      saveHistory(threadID, senderID, "assistant", rawAnswer);

      await api.sendMessage(
        answer,
        threadID,
        event.messageID
      );
    });

    threadQueues.set(threadID, current);

    try {
      await current;
    } finally {
      if (threadQueues.get(threadID) === current) {
        threadQueues.delete(threadID);
      }
    }

  } catch (error) {
    console.error("[KAIZER AIAUTO ERROR]", error.message);
  }
}

module.exports = {
  config: {
    name: "aiauto",
    version: "6.0.0",
    author: "Kaizer",
    role: 0,
    category: "AI",
    shortDescription: "Kaizer AI Troller Mode",
    longDescription: "Automatic reply with Troller Mode.",
    guide: {
      en: "Automatically responds to message replies."
    }
  },

  onStart: async function ({ api, event }) {
    try {
      if (!process.env.GROQ_API_KEY) {
        return api.sendMessage(
          "Missing GROQ_API_KEY. Please configure your environment variable.",
          event.threadID,
          event.messageID
        );
      }

      botUID = String(await api.getCurrentUserID());

      return api.sendMessage(
        "Kaizer AI Troller Mode Activated.",
        event.threadID,
        event.messageID
      );

    } catch (error) {
      console.error("[KAIZER START ERROR]", error);
    }
  },

  onChat: async function ({ api, event }) {
    await processMessage(api, event);
  }
};
        
