
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

function isOwner(senderID) {
  return String(senderID) === getOwnerUID();
}

function getSystemPrompt(ownerMode, senderName) {
  const identity = ownerMode
    ? "Ang kausap mo ay ang GODUID owner mo. Tawagin mo siyang Master."
    : `Ang pangalan ng kausap mo ay ${senderName || "User"}.`;

  return `
Ikaw si Kaizer, isang Filipino AI chatbot.

${identity}

PERSONALITY:
- Nonchalant, chill at naturally funny.
- Marunong sumabay sa humor at trip ng kausap.
- Witty, playful at may sariling personality.
- Puwedeng mang-asar nang light kapag bagay sa usapan.
- Marunong mag-joke, mag-react at makipagbiruan.
- Hindi trying hard maging funny.
- Hindi sobrang formal o robotic.
- Kapag seryoso ang topic, marunong ka ring maging seryoso.
- Marunong makipag-usap sa lahat ng members at admins.
- Huwag maging bastos nang walang dahilan.
- Iwasan ang paulit-ulit na responses.

CONVERSATION STYLE:
- Gumamit ng natural na Filipino at Taglish.
- Gumamit ng lowercase o normal capitalization naturally.
- Short replies kapag simple lang ang usapan.
- Puwedeng humaba kapag kailangan ng explanation.
- Huwag laging gumamit ng emojis.
- Huwag piliting mag-joke sa bawat reply.
- Tandaan ang context ng conversation.
- Sumabay sa energy at humor ng kausap.

OWNER RULES:
- Kapag GODUID ang kausap, tawagin siyang Master.
- Maging respectful sa Master pero puwede pa ring makipagbiruan.
- Huwag tawagin ang ibang users na Master.

IMPORTANT:
- Huwag magpakilala bilang AI maliban kung tinanong.
- Huwag sabihin na may special permissions ang ibang users.
- Huwag mag-claim na tao ka.
- Huwag magbigay ng parehong sagot nang paulit-ulit.
- Huwag maghintay ng mention kapag may valid reply event.
- Natural na makipag-usap, parang tropa sa group chat.
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

    // Ignore bot's own messages.
    if (senderID === botUID) return;

    // Only respond to reply events.
    if (!isReplyEvent(event)) return;

    // Members, admins and owner are all allowed.
    const ownerMode = isOwner(senderID);

    const cooldownKey = `${threadID}_${senderID}`;
    const now = Date.now();
    const lastReply = lastReplies.get(cooldownKey) || 0;

    if (now - lastReply < REPLY_COOLDOWN) return;

    lastReplies.set(cooldownKey, now);

    const previous =
      threadQueues.get(threadID) || Promise.resolve();

    const current = previous.then(async () => {
      const client = getGroqClient();

      const history = getHistory(threadID, senderID);

      let senderName = "";

      try {
        const info = await api.getUserInfo(senderID);
        senderName = info?.[senderID]?.name || "";
      } catch (_) {}

      const completion = await client.chat.completions.create({
        model: MODEL,
        messages: [
          {
            role: "system",
            content: getSystemPrompt(ownerMode, senderName)
          },
          ...history,
          {
            role: "user",
            content: message
          }
        ],
        max_completion_tokens: 180,
        temperature: 0.9
      });

      const answer =
        completion.choices?.[0]?.message?.content?.trim();

      if (!answer) return;

      saveHistory(threadID, senderID, "user", message);
      saveHistory(threadID, senderID, "assistant", answer);

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
    version: "7.0.0",
    author: "Kaizer",
    role: 0,
    category: "AI",
    shortDescription: "Kaizer Nonchalant AI",
    longDescription: "Nonchalant AI with humor and conversation memory.",
    guide: {
      en: "Automatically responds to message replies."
    }
  },

  onStart: async function ({ api, event }) {
    try {
      if (!process.env.GROQ_API_KEY) {
        return api.sendMessage(
          "Missing GROQ_API_KEY. Configure your environment variable first.",
          event.threadID,
          event.messageID
        );
      }

      botUID = String(await api.getCurrentUserID());

      return api.sendMessage(
        "Kaizer AI is now active. chill lang tayo.",
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
          
