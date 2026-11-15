
if (!global.GoatBot.tossGames) {
  global.GoatBot.tossGames = new Map();
}

module.exports = {
  config: {
    name: "toss",
    aliases: ["coinflip", "flip"],
    version: "1.0.0",
    author: "Edward",
    countDown: 3,
    role: 0,
    description: {
      en: "Play a coin toss guessing game."
    },
    category: "game",
    guide: {
      en: "{pn} heads or tails"
    }
  },

  onStart: async function ({ message, event, args }) {
    const guess = (args[0] || "").toLowerCase();

    if (!["heads", "tails"].includes(guess)) {
      return message.reply(
        "🪙 TOSS COIN GAME\n\n" +
        "Guess which side will appear!\n\n" +
        "Usage:\n" +
        "/toss heads\n" +
        "/toss tails"
      );
    }

    const result = Math.random() < 0.5 ? "heads" : "tails";
    const won = guess === result;

    let reward = 0;

    if (won) {
      reward = Math.floor(Math.random() * 2000) + 1;

      try {
        await global.db.usersData.addMoney(
          event.senderID,
          reward
        );
      } catch (err) {
        console.error("TOSS COIN BALANCE ERROR:", err);
        return message.reply(
          "⚠️ Coin toss worked, but the balance system returned an error."
        );
      }
    }

    return message.reply(
      "🪙 COIN TOSS RESULT\n\n" +
      `Your guess: ${guess.toUpperCase()}\n` +
      `Coin result: ${result.toUpperCase()}\n\n` +
      (won
        ? `🎉 YOU WIN!\n💰 Reward: +${reward.toLocaleString()} coins`
        : "❌ YOU LOSE!\nNo coins added or deducted.") +
      "\n\nPlay again using /toss heads or /toss tails."
    );
  }
};
          
