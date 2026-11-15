const games = new Map();

// ==========================================
// KAIZER WORDLE - WORD BANK
// ==========================================

const wordBank = {
  APPLE: "A fruit that is usually red or green.",
  GRAPE: "A small fruit that grows in clusters.",
  MANGO: "A sweet tropical fruit with yellow flesh.",
  PEACH: "A soft fruit with fuzzy skin.",
  BERRY: "A small juicy fruit.",
  LEMON: "A sour yellow citrus fruit.",
  MELON: "A large juicy fruit with a thick rind.",
  BREAD: "A food made from flour.",
  PIZZA: "A round dish topped with cheese and sauce.",
  PASTA: "An Italian food made from wheat.",
  HONEY: "A sweet substance made by bees.",
  SUGAR: "A sweet ingredient used in desserts.",
  SALAD: "A dish usually made with vegetables.",
  JUICE: "A drink made from fruits.",
  WATER: "A liquid essential for life.",
  CHAIR: "Something you sit on.",
  TABLE: "Furniture with a flat surface and legs.",
  CLOCK: "Something used to tell time.",
  HOUSE: "A building where people live.",
  HOTEL: "A place where travelers stay.",
  PHONE: "A device used to communicate.",
  RADIO: "A device used to listen to broadcasts.",
  WATCH: "Something worn on the wrist to tell time.",
  GLASS: "A material used for windows and cups.",
  SHELF: "A flat surface used for storing things.",
  PLATE: "Something used to serve food.",
  SPOON: "A utensil used for eating soup.",
  BRUSH: "An object used for cleaning or styling.",
  PAPER: "A material used for writing.",
  LIGHT: "Something that allows you to see.",
  HEART: "The organ that pumps blood.",
  BRAIN: "The organ responsible for thinking.",
  TEETH: "Hard structures used for chewing.",
  SMILE: "An expression that shows happiness.",
  HAPPY: "Feeling joy or pleasure.",
  ANGRY: "Feeling strong displeasure.",
  SLEEP: "The state of resting.",
  DREAM: "Images and experiences during sleep.",
  LAUGH: "To make sounds when something is funny.",
  MUSIC: "Sounds arranged in a pleasant way.",
  DANCE: "Moving your body to music.",
  TIGER: "A wild animal with orange and black stripes.",
  ZEBRA: "An animal with black and white stripes.",
  HORSE: "An animal often used for riding.",
  SNAKE: "A long reptile with no legs.",
  EAGLE: "A large bird known for sharp eyesight.",
  SHARK: "A large fish with sharp teeth.",
  WHALE: "A huge marine mammal.",
  SNAIL: "A slow-moving animal with a shell.",
  MOUSE: "A small rodent with a long tail.",
  SHEEP: "A farm animal that produces wool.",
  QUEEN: "A female ruler of a kingdom.",
  CROWN: "A special headpiece worn by royalty.",
  GHOST: "A spirit in spooky stories.",
  ANGEL: "A spiritual being often shown with wings.",
  MAGIC: "An extraordinary power used in fantasy.",
  ROBOT: "A machine that can perform tasks.",
  ALIEN: "A being believed to come from another planet.",
  WORLD: "The planet where humans live.",
  EARTH: "The planet we live on.",
  OCEAN: "A very large body of salt water.",
  RIVER: "A natural stream of flowing water.",
  CLOUD: "A mass of water droplets in the sky.",
  STORM: "Severe weather with strong winds and rain.",
  FLAME: "The visible part of a fire.",
  STONE: "A small piece of rock.",
  GRASS: "A green plant that covers many lawns.",
  PLANT: "A living thing that grows in soil.",
  BEACH: "A sandy area beside the sea.",
  SPACE: "The vast area beyond Earth's atmosphere.",
  MOON: "The natural satellite of Earth.",
  NIGHT: "The dark part of the day.",
  TRAIN: "A vehicle that runs on railway tracks.",
  PLANE: "A vehicle that flies through the sky.",
  TRUCK: "A large vehicle used for carrying goods.",
  PILOT: "A person trained to fly an aircraft.",
  CLASS: "A group of students learning together.",
  STUDY: "The act of learning about a subject.",
  TEACH: "To help someone learn.",
  LEARN: "To gain knowledge or a new skill.",
  GRADE: "A mark showing academic performance.",
  WRITE: "To form letters or words.",
  DRAW: "To create a picture using lines.",
  PAINT: "To apply color to a surface.",
  SPORT: "A physical activity involving skill.",
  GAMES: "Activities played for fun.",
  SCORE: "The number of points earned.",
  MATCH: "A contest between players or teams.",
  COURT: "An area where certain sports are played.",
  BRAVE: "Showing courage.",
  SMART: "Having the ability to learn and understand.",
  QUICK: "Moving or happening very fast.",
  QUIET: "Making little or no noise.",
  FUNNY: "Something that makes people laugh.",
  SWEET: "Having a taste like sugar.",
  FRESH: "Recently made or obtained.",
  CLEAN: "Free from dirt or mess.",
  DIRTY: "Covered with dirt or stains.",
  STRONG: "Having great power.",
  WEAK: "Lacking strength or power.",
  HUMAN: "A person belonging to the human species.",
  FRIEND: "Someone you know and trust.",
  TRUST: "Belief that someone is reliable.",
  PEACE: "A state without war or conflict.",
  TRUTH: "Something that is real or correct.",
  MONEY: "Something used to buy goods and services.",
  PRICE: "The amount needed to buy something.",
  STORE: "A place where products are sold.",
  OWNER: "A person who possesses something.",
  BUYER: "A person who purchases something.",
  PARTY: "A social gathering for celebration.",
  EVENT: "Something important that happens.",
  MOVIE: "A story shown through moving pictures.",
  ACTOR: "A person who performs in films.",
  STORY: "An account of events.",
  NOVEL: "A long fictional written story.",
  TITLE: "The name given to a book or work.",
  VIDEO: "A recording of moving images.",
  PHOTO: "An image captured by a camera.",
  COLOR: "The appearance of something based on light.",
  BLACK: "The darkest color.",
  WHITE: "The color of fresh snow.",
  GREEN: "The color commonly associated with leaves.",
  BROWN: "A color often seen in soil and wood.",
  ROUND: "Having the shape of a circle.",
  SHARP: "Having an edge or point.",
  ROUGH: "Having an uneven surface.",
  SMOOTH: "Having an even surface.",
  EMPTY: "Containing nothing.",
  LARGE: "Big in size.",
  SMALL: "Little in size.",
  HEAVY: "Having a lot of weight.",
  EARLY: "Happening before the expected time.",
  LATER: "Happening after the present time.",
  TODAY: "The current day.",
  MONTH: "A period of time in a calendar year.",
  SEVEN: "The number after six.",
  THREE: "The number after two.",
  EIGHT: "The number after seven.",
  FIRST: "Coming before all others.",
  THIRD: "Coming after second.",
  FIFTH: "Coming after fourth.",
  FINAL: "The last part of something.",
  BEGIN: "To start something.",
  START: "To begin an activity.",
  BUILD: "To construct or make something.",
  BREAK: "To separate something into pieces.",
  THROW: "To send something through the air.",
  CATCH: "To grab something moving through the air.",
  CARRY: "To transport something.",
  TOUCH: "To make physical contact.",
  THINK: "To use your mind.",
  GUESS: "To answer without being certain.",
  SPEAK: "To say words using your voice.",
  REPLY: "An answer given to someone.",
  ENJOY: "To take pleasure in something.",
  RELAX: "To rest and become less stressed.",
  AVOID: "To stay away from something.",
  CHASE: "To run after someone or something.",
  REACH: "To arrive at or touch something.",
  SHARE: "To give part of something to others.",
  SERVE: "To provide food or help.",
  GUIDE: "To show someone the way.",
  BRING: "To take something along.",
  LEAVE: "To go away from a place.",
  ENTER: "To go inside a place.",
  CROSS: "To go from one side to another.",
  CLIMB: "To move upward using hands and feet.",
  SLIDE: "To move smoothly across a surface.",
  SWING: "To move back and forth.",
  CYCLE: "To ride a bicycle."
};

// ==========================================
// RANDOM WORD
// ==========================================

let unusedWords = Object.keys(wordBank);

function getRandomWord() {
  if (unusedWords.length === 0) {
    unusedWords = Object.keys(wordBank);
  }

  const index = Math.floor(Math.random() * unusedWords.length);
  return unusedWords.splice(index, 1)[0];
}

// ==========================================
// WORDLE CHECKER
// ==========================================

function checkGuess(guess, answer) {
  const result = Array(5).fill("⬛");
  const answerLetters = answer.split("");
  const guessLetters = guess.split("");

  // Correct position
  for (let i = 0; i < 5; i++) {
    if (guessLetters[i] === answerLetters[i]) {
      result[i] = "🟩";
      answerLetters[i] = null;
      guessLetters[i] = null;
    }
  }

  // Correct letter, wrong position
  for (let i = 0; i < 5; i++) {
    if (guessLetters[i] === null) continue;

    const index = answerLetters.indexOf(guessLetters[i]);

    if (index !== -1) {
      result[i] = "🟨";
      answerLetters[index] = null;
    }
  }

  return result;
}

// ==========================================
// COMMAND CONFIG
// ==========================================

module.exports.config = {
  name: "wordle",
  aliases: ["wdl, wordle"],
  version: "5.1.0",
  author: "Kaizer",
  role: 0,
  category: "game",
  shortDescription: "Guess the hidden 5-letter word",
  longDescription: "Play Wordle and win random coins.",
  guide: {
    en: "{pn} - Start a game\n{pn} <word> - Submit your guess\n{pn} quit - End your game"
  }
};

// ==========================================
// MAIN COMMAND
// ==========================================

module.exports.run = async function ({ api, event, args, usersData }) {
  const uid = event.senderID;
  const threadID = event.threadID;
  const guess = (args[0] || "").trim().toUpperCase();

  const send = (message) =>
    api.sendMessage(message, threadID, event.messageID);

  // QUIT
  if (["QUIT", "EXIT"].includes(guess)) {
    if (!games.has(uid)) {
      return send("❌ Wala Kang Active Wordle Game.");
    }

    games.delete(uid);
    return send("🚪 Wordle Game Ended.");
  }

  // START GAME
  if (!games.has(uid)) {
    const answer = getRandomWord();

    games.set(uid, {
      answer,
      attempts: 0
    });

    return send(
      "🎮 KAIZER WORDLE\n\n" +
      "Guess The Hidden 5-Letter Word!\n\n" +
      "💡 CLUE:\n" + wordBank[answer] + "\n\n" +
      "🟩 = Correct Letter And Position\n" +
      "🟨 = Correct Letter, Wrong Position\n" +
      "⬛ = Letter Not In The Word\n\n" +
      "❤️ Attempts: 6\n\n" +
      "Type: wdl <guess>\n" +
      "Example: wdl chair\n\n" +
      "Type: wdl quit To End The Game."
    );
  }

  const game = games.get(uid);

  // VALIDATE GUESS
  if (!/^[A-Z]{5}$/.test(guess)) {
    return send(
      "⚠️ Your Guess Must Contain Exactly 5 Letters!\n\n" +
      "Example: wdl chair"
    );
  }

  // WORD BANK VALIDATION
  if (!Object.prototype.hasOwnProperty.call(wordBank, guess)) {
    return send(
      "❌ Word Not Found In The Word Bank!\n" +
      "Please Try Another 5-Letter Word."
    );
  }

  // COUNT ATTEMPT
  game.attempts++;

  const result = checkGuess(guess, game.answer);

  // WIN
  if (guess === game.answer) {
    const reward = Math.floor(Math.random() * 2000) + 1;

    try {
      await usersData.addMoney(uid, reward);

      const balance = await usersData.getMoney(uid);

      games.delete(uid);

      return send(
        "🎉 WORDLE COMPLETED!\n\n" +
        "🟩 " + guess.split("").join(" ") + "\n\n" +
        "✅ Correct Answer: " + game.answer + "\n" +
        "🎁 Reward: +" + reward.toLocaleString() + " Coins\n" +
        "💰 Your Balance: " + Number(balance).toLocaleString() + " Coins\n\n" +
        "🏆 Congratulations!"
      );
    } catch (error) {
      games.delete(uid);
      console.error("[WORDLE REWARD ERROR]", error);

      return send(
        "🎉 You Guessed The Correct Word!\n" +
        "However, The Coin Reward Could Not Be Added.\n" +
        "Please Check Your Economy System."
      );
    }
  }

  // GAME OVER
  if (game.attempts >= 6) {
    games.delete(uid);

    return send(
      "❌ GAME OVER!\n\n" +
      result.join(" ") + "\n\n" +
      "🔑 Correct Answer: " + game.answer + "\n" +
      "💰 Coins: No Coins Added Or Deducted.\n\n" +
      "Type wdl To Play Again!"
    );
  }

  // CONTINUE GAME
  return send(
    "🎮 KAIZER WORDLE\n\n" +
    result.join(" ") + "\n\n" +
    "📝 Your Guess: " + guess + "\n" +
    "❤️ Attempts Used: " + game.attempts + "/6\n" +
    "🔄 Attempts Left: " + (6 - game.attempts) + "\n\n" +
    "💡 Clue: " + wordBank[game.answer] + "\n\n" +
    "Type: wdl <guess>"
  );
};
  
