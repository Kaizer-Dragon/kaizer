const games = new Map();

// ==========================================
// KAIZER WORDLE - 250 WORD BANK
// ==========================================

const wordBank = {
  APPLE: "A fruit that is usually red or green.",
  GRAPE: "A small fruit that grows in clusters.",
  MANGO: "A sweet tropical fruit with yellow flesh.",
  PEACH: "A soft fruit with fuzzy skin.",
  BERRY: "A small juicy fruit.",
  LEMON: "A sour yellow citrus fruit.",
  MELON: "A large juicy fruit with a thick rind.",
  OLIVE: "A small fruit often used to make oil.",
  BREAD: "A food made from flour.",
  PIZZA: "A round dish topped with cheese and sauce.",
  PASTA: "An Italian food made from wheat.",
  HONEY: "A sweet substance made by bees.",
  SUGAR: "A sweet ingredient used in desserts.",
  SALAD: "A dish usually made with vegetables.",
  JUICE: "A drink made from fruits or vegetables.",
  WATER: "A liquid essential for life.",
  CHAIR: "Something you sit on.",
  TABLE: "Furniture with a flat surface and legs.",
  CLOCK: "Something used to tell time.",
  HOUSE: "A building where people live.",
  HOTEL: "A place where travelers stay.",
  PHONE: "A device used to communicate with people.",
  RADIO: "A device used to listen to broadcasts.",
  WATCH: "Something worn on the wrist to tell time.",
  GLASS: "A material used for windows and cups.",
  SHELF: "A flat surface used for storing things.",
  KNIFE: "A tool used for cutting.",
  PLATE: "Something used to serve food.",
  SPOON: "A utensil used for eating soup.",
  BRUSH: "An object used for cleaning or styling.",
  PAPER: "A material used for writing and printing.",
  LIGHT: "Something that allows you to see.",
  HEART: "The organ that pumps blood around the body.",
  BRAIN: "The organ responsible for thinking.",
  BLOOD: "The red liquid that flows through your body.",
  TEETH: "Hard structures used for biting and chewing.",
  SMILE: "An expression that shows happiness.",
  HAPPY: "Feeling joy or pleasure.",
  ANGRY: "Feeling strong displeasure.",
  SLEEP: "The state of resting at night.",
  DREAM: "Images and experiences you have while sleeping.",
  LAUGH: "To make sounds when something is funny.",
  MUSIC: "Sounds arranged in a pleasant way.",
  DANCE: "Moving your body to music.",
  TIGER: "A wild animal with orange and black stripes.",
  ZEBRA: "An animal with black and white stripes.",
  HORSE: "An animal often used for riding.",
  SNAKE: "A long reptile with no legs.",
  EAGLE: "A large bird known for its sharp eyesight.",
  SHARK: "A large fish with sharp teeth.",
  WHALE: "A huge marine mammal.",
  SNAIL: "A slow-moving animal with a shell.",
  MOUSE: "A small rodent with a long tail.",
  SHEEP: "A farm animal that produces wool.",
  CLOWN: "A performer who entertains people with funny acts.",
  QUEEN: "A female ruler of a kingdom.",
  CROWN: "A special headpiece worn by royalty.",
  GHOST: "A spirit in many spooky stories.",
  ANGEL: "A spiritual being often shown with wings.",
  MAGIC: "An extraordinary power used in fantasy.",
  ROBOT: "A machine that can perform tasks automatically.",
  ALIEN: "A being believed to come from another planet.",
  WORLD: "The planet where humans live.",
  EARTH: "The planet we live on.",
  OCEAN: "A very large body of salt water.",
  RIVER: "A natural stream of flowing water.",
  CLOUD: "A mass of water droplets floating in the sky.",
  STORM: "Severe weather with strong winds and rain.",
  FLAME: "The visible part of a fire.",
  STONE: "A small piece of rock.",
  GRASS: "A green plant that covers many lawns.",
  PLANT: "A living thing that grows in soil.",
  BEACH: "A sandy or rocky area beside the sea.",
  SPACE: "The vast area beyond Earth's atmosphere.",
  MOON: "The natural satellite of Earth.",
  NIGHT: "The dark part of the day.",
  TRAIN: "A vehicle that runs on railway tracks.",
  PLANE: "A vehicle that flies through the sky.",
  TRUCK: "A large vehicle used for carrying goods.",
  SHIP: "A large vessel that travels on water.",
  MOTOR: "A machine that produces movement.",
  PILOT: "A person trained to fly an aircraft.",
  CLASS: "A group of students learning together.",
  STUDY: "The act of learning about a subject.",
  TEACH: "To help someone learn something.",
  LEARN: "To gain knowledge or a new skill.",
  GRADE: "A mark showing academic performance.",
  WRITE: "To form letters or words.",
  DRAW: "To create a picture using lines.",
  PAINT: "To apply color to a surface.",
  SPORT: "A physical activity involving skill or competition.",
  GAMES: "Activities played for fun or competition.",
  SCORE: "The number of points earned in a game.",
  MATCH: "A contest between players or teams.",
  COURT: "An area where certain sports are played.",
  BRAVE: "Showing courage when facing difficulty.",
  SMART: "Having the ability to learn and understand.",
  QUICK: "Moving or happening very fast.",
  QUIET: "Making little or no noise.",
  FUNNY: "Something that makes people laugh.",
  SWEET: "Having a taste like sugar.",
  FRESH: "Recently made or obtained.",
  CLEAN: "Free from dirt or mess.",
  DIRTY: "Covered with dirt or stains.",
  STRONG: "Having great physical or mental power.",
  WEAK: "Lacking strength or power.",
  CHILD: "A young human being.",
  HUMAN: "A person belonging to the human species.",
  FRIEND: "Someone you know and trust.",
  TRUST: "Belief that someone is reliable.",
  PEACE: "A state without war or conflict.",
  PRIDE: "A feeling of satisfaction in achievements.",
  FAITH: "Strong belief or trust in something.",
  TRUTH: "Something that is real or correct.",
  MONEY: "Something used to buy goods and services.",
  PRICE: "The amount of money needed to buy something.",
  STORE: "A place where products are sold.",
  OWNER: "A person who possesses something.",
  BUYER: "A person who purchases something.",
  PARTY: "A social gathering for celebration.",
  EVENT: "Something important that happens.",
  MOVIE: "A story shown through moving pictures.",
  ACTOR: "A person who performs in films or plays.",
  STORY: "An account of events, real or imaginary.",
  NOVEL: "A long fictional written story.",
  TITLE: "The name given to a book or work.",
  VIDEO: "A recording of moving images.",
  PHOTO: "An image captured by a camera.",
  COLOR: "The appearance of something based on light.",
  BLACK: "The darkest color.",
  WHITE: "The color of fresh snow.",
  GREEN: "The color commonly associated with leaves.",
  BROWN: "A color often seen in soil and wood.",
  ROUND: "Having the shape of a circle or sphere.",
  SHARP: "Having an edge or point that can cut.",
  ROUGH: "Having an uneven surface.",
  SMOOTH: "Having an even and soft surface.",
  EMPTY: "Containing nothing.",
  LARGE: "Big in size.",
  SMALL: "Little in size.",
  HEAVY: "Having a lot of weight.",
  EARLY: "Happening before the expected time.",
  LATER: "Happening after the present time.",
  TODAY: "The current day.",
  MONTH: "A period of time in a calendar year.",
  SEVEN: "The number that comes after six.",
  THREE: "The number that comes after two.",
  EIGHT: "The number that comes after seven.",
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
  CARRY: "To transport something from one place to another.",
  TOUCH: "To make physical contact with something.",
  THINK: "To use your mind to consider something.",
  GUESS: "To answer without being completely certain.",
  SPEAK: "To say words using your voice.",
  REPLY: "An answer given to someone.",
  ENJOY: "To take pleasure in something.",
  RELAX: "To rest and become less stressed.",
  AVOID: "To stay away from something.",
  CHASE: "To run after someone or something.",
  REACH: "To arrive at or touch something.",
  OFFER: "To present something for someone to accept.",
  SHARE: "To give part of something to others.",
  SERVE: "To provide food or help to someone.",
  GUIDE: "To show someone the way.",
  BRING: "To take something along with you.",
  LEAVE: "To go away from a place.",
  ENTER: "To go inside a place.",
  CROSS: "To go from one side to another.",
  CLIMB: "To move upward using hands and feet.",
  SLIDE: "To move smoothly across a surface.",
  SWING: "To move back and forth.",
  CYCLE: "To ride a bicycle.",
  ALARM: "A device that makes a sound to warn or wake someone.",
  BLADE: "The cutting part of a tool.",
  BLOCK: "A solid piece of material.",
  BLOOM: "A flower or the process of flowering.",
  BOARD: "A flat piece of wood or other material.",
  BRAND: "A name used to identify a product.",
  BRICK: "A rectangular block used in building walls.",
  CABLE: "A thick wire used to connect devices.",
  CAMEL: "An animal known for its humps.",
  CANDY: "A sweet treat made with sugar.",
  CHAIN: "A series of connected metal links.",
  CHARM: "Something believed to bring good luck.",
  CHEST: "The front part of your upper body.",
  CHIEF: "A leader or person in charge.",
  CLAIM: "To say something is true.",
  CLEAR: "Easy to see or understand.",
  CLICK: "A short sharp sound or a mouse action.",
  CLOSE: "To shut something.",
  COACH: "A person who trains a team.",
  COAST: "Land beside the sea.",
  COMIC: "A story told through pictures.",
  COUNT: "To determine the number of things.",
  COVER: "Something placed over another thing.",
  CRACK: "A narrow break in a surface.",
  CRAFT: "An activity involving making things by hand.",
  CRAZY: "Very unusual or not sensible.",
  CREAM: "A thick dairy product.",
  CROWD: "A large group of people.",
  DAILY: "Happening every day.",
  DELAY: "Something that happens later than expected.",
  DEPTH: "The distance from top to bottom.",
  DOUBT: "A feeling of uncertainty.",
  DOZEN: "A group of twelve.",
  DRAFT: "An early version of a piece of writing.",
  DRAMA: "A story involving conflict and emotion.",
  DRESS: "A piece of clothing.",
  DRINK: "A liquid that you can consume.",
  DRIVE: "To operate a vehicle.",
  ELDER: "An older person.",
  ELITE: "A group considered the best.",
  ENEMY: "Someone who opposes another person.",
  ERROR: "A mistake.",
  EXIST: "To be real or alive.",
  EXTRA: "More than what is usual.",
  FIELD: "An open area of land.",
  FIFTY: "The number after forty-nine.",
  FLASH: "A sudden burst of light.",
  FLOOR: "The surface you walk on inside a room.",
  FOCUS: "To give attention to something.",
  FORCE: "Strength or power.",
  FRAME: "A structure surrounding a picture.",
  FRONT: "The part facing forward.",
  FRUIT: "The edible part of a plant.",
  GIANT: "An extremely large person or thing.",
  GLOBE: "A round model of Earth.",
  GRAIN: "A small hard seed of a plant.",
  GRAND: "Impressive or large.",
  GREAT: "Very good or excellent.",
  GROUP: "A collection of people or things.",
  GROWN: "Having developed or become mature.",
  GUARD: "A person who protects something.",
  GUEST: "A person invited to a place.",
  HONOR: "High respect or good character.",
  IDEAL: "The best possible example.",
  IMAGE: "A picture or visual representation.",
  INDEX: "An alphabetical list or indicator.",
  INNER: "Located inside.",
  INPUT: "Information entered into a system.",
  ISSUE: "An important topic or problem.",
  JEWEL: "A precious stone.",
  JOINT: "A place where two parts connect.",
  JUDGE: "A person who makes decisions in court.",
  KNOWN: "Recognized or familiar.",
  LABEL: "A tag that identifies something.",
  LASER: "A focused beam of light.",
  LAYER: "One level placed over another."
};

// ==========================================
// RANDOM WORD WITHOUT REPEAT
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
// WORDLE GAME FUNCTIONS
// ==========================================

function getHint(word) {
  return wordBank[word];
}

function checkGuess(guess, answer) {
  const result = Array(5).fill("⬛");
  const answerLetters = answer.split("");
  const guessLetters = guess.split("");

  for (let i = 0; i < 5; i++) {
    if (guessLetters[i] === answerLetters[i]) {
      result[i] = "🟩";
      answerLetters[i] = null;
      guessLetters[i] = null;
    }
  }

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
  aliases: ["wdl"],
  version: "5.1.0",
  author: "Kaizer",
  role: 0,
  category: "game",
  shortDescription: "Guess the hidden 5-letter word",
  longDescription: "Play Wordle and win random coins.",
  guide: {
    en: "{pn} - Start a game\n{pn} <word> - Submit your guess\n{pn} quit - End your current game"
  }
};

// ==========================================
// MAIN COMMAND
// ==========================================

module.exports.run = async function ({ api, event, args, usersData }) {
  const uid = event.senderID;
  const guess = (args[0] || "").toUpperCase();

  // QUIT GAME
  if (guess === "QUIT" || guess === "EXIT") {
    if (!games.has(uid)) {
      return api.sendMessage(
        "❌ Wala Kang Active Wordle Game.",
        event.threadID,
        event.messageID
      );
    }

    games.delete(uid);

    return api.sendMessage(
      "🚪 Wordle Game Ended.",
      event.threadID,
      event.messageID
    );
  }

  // START GAME
  if (!games.has(uid)) {
    const answer = getRandomWord();

    games.set(uid, {
      answer,
      attempts: 0
    });

    return api.sendMessage(
      "🎮 KAIZER WORDLE\n\n" +
      "Guess The Hidden 5-Letter Word!\n\n" +
      "💡 CLUE:\n" + getHint(answer) + "\n\n" +
      "🟩 = Correct Letter And Position\n" +
      "🟨 = Correct Letter, Wrong Position\n" +
      "⬛ = Letter Not In The Word\n\n" +
      "❤️ Attempts: 6\n\n" +
      "Type: wordle <guess>\n" +
      "Example: wordle chair\n\n" +
      "Type: wordle quit To End The Game.",
      event.threadID,
      event.messageID
    );
  }

  const game = games.get(uid);

  // CHECK GUESS LENGTH
  if (!guess || guess.length !== 5) {
    return api.sendMessage(
      "⚠️ Your Guess Must Contain Exactly 5 Letters!\n\n" +
      "Example: wordle chair",
      event.threadID,
      event.messageID
    );
  }

  // CHECK VALID WORD
  if (!wordBank[guess]) {
    return api.sendMessage(
      "❌ Word Not Found In The Word Bank!\n" +
      "Please Try Another 5-Letter Word.",
      event.threadID,
      event.messageID
    );
  }

  // COUNT ATTEMPT
  game.attempts++;

  // CHECK ANSWER
  const result = checkGuess(guess, game.answer);

  // WIN
  if (guess === game.answer) {
    const reward = Math.floor(Math.random() * 2000) + 1;

    try {
      await usersData.addMoney(uid, reward);

      const balance = await usersData.getMoney(uid);

      games.delete(uid);

      return api.sendMessage(
        "🎉 WORDLE COMPLETED!\n\n" +
        "🟩 " + guess.split("").join(" ") + "\n\n" +
        "✅ Correct Answer: " + game.answer + "\n" +
        "🎁 Reward: +" + reward.toLocaleString() + " Coins\n" +
        "💰 Your Balance: " + Number(balance).toLocaleString() + " Coins\n\n" +
        "🏆 Congratulations!",
        event.threadID,
        event.messageID
      );
    } catch (error) {
      games.delete(uid);

      console.error("[WORDLE REWARD ERROR]", error);

      return api.sendMessage(
        "🎉 You Guessed The Correct Word!\n" +
        "However, The Coin Reward Could Not Be Added. Please Check Your Economy System.",
        event.threadID,
        event.messageID
      );
    }
  }

  // LOSE AFTER 6 ATTEMPTS
  if (game.attempts >= 6) {
    games.delete(uid);

    return api.sendMessage(
      "❌ GAME OVER!\n\n" +
      result.join(" ") + "\n\n" +
      "🔑 Correct Answer: " + game.answer + "\n" +
      "💰 Coins: No Coins Added Or Deducted.\n\n" +
      "Type wordle To Play Again!",
      event.threadID,
      event.messageID
    );
  }

  // CONTINUE GAME
  return api.sendMessage(
    "🎮 KAIZER WORDLE\n\n" +
    result.join(" ") + "\n\n" +
    "📝 Your Guess: " + guess + "\n" +
    "❤️ Attempts Used: " + game.attempts + "/6\n" +
    "🔄 Attempts Left: " + (6 - game.attempts) + "\n\n" +
    "💡 Clue: " + getHint(game.answer) + "\n\n" +
    "Type: wordle <guess>",
    event.threadID,
    event.messageID
  );
};
