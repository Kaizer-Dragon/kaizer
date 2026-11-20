
const config = require("../../config.json");

module.exports = {
  config: {
    name: "autoreactadmin",
    version: "1.1.0",
    author: "Kaizer",
    countDown: 0,
    role: 0,
    description: {
      en: "Automatically reacts to admin and member messages"
    },
    category: "events"
  },

  onStart: async function () {},

  onChat: async function ({ api, event }) {
    if (!event || !event.body || !event.messageID) return;

    const adminIDs = Array.isArray(config.adminBot)
      ? config.adminBot.map(String)
      : [];

    const senderID = String(event.senderID || "");

    if (!senderID) return;

    // Admin reaction
    const reaction = adminIDs.includes(senderID)
      ? "😆"
      : "💚";

    api.setMessageReaction(
      reaction,
      event.messageID,
      err => {
        if (err) {
          console.error("[autoreactadmin] Reaction failed:", err);
        }
      },
      true
    );
  }
};
