
const games = new Map();

// ==========================================
// KAIZER WORDLE - 250 WORDS
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
  NIGHT: "The dark part of the day.",
  TRAIN: "A vehicle that runs on railway tracks.",
  PLANE: "A vehicle that flies through the sky.",
  TRUCK: "A large vehicle used for carrying goods.",
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
  WEAK: "Lacking strength or power.",
  CHILD: "A young human being.",
  HUMAN: "A person belonging to the human species.",
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
  LAYER: "One level placed over another.",
  LEAST: "The smallest amount.",
  LEGAL: "Allowed by law.",
  LEVEL: "A position or stage.",
  LIMIT: "The maximum amount allowed.",
  LOCAL: "Belonging to a nearby area.",
  LOGIC: "Reasonable thinking.",
  LOOSE: "Not firmly fixed.",
  LUCKY: "Having good fortune.",
  LUNCH: "A meal eaten in the middle of the day.",
  MAJOR: "Important or significant.",
  MAKER: "A person or company that creates something.",
  MARCH: "The third month of the year.",
  MAYBE: "Possibly or perhaps.",
  MAYOR: "The elected leader of a city.",
  METAL: "A hard material such as iron.",
  MINOR: "Less important or smaller.",
  MODEL: "A representation of something.",
  MORAL: "Related to right and wrong.",
  MOUTH: "The opening used for eating and speaking.",
  NERVE: "A part of the body carrying signals.",
  NEVER: "Not at any time.",
  NOISE: "An unwanted or loud sound.",
  NORTH: "A direction opposite south.",
  NURSE: "A healthcare professional who cares for patients.",
  OFTEN: "Many times.",
  ORDER: "A command or arrangement.",
  OTHER: "Different from the one mentioned.",
  PANEL: "A flat section of a larger structure.",
  PHASE: "A stage in a process.",
  PIANO: "A musical instrument with black and white keys.",
  PIECE: "A part of a whole.",
  PITCH: "The highness or lowness of a sound.",
  PLAIN: "Simple or without decoration.",
  POINT: "A specific location or idea.",
  POWER: "The ability to control or influence.",
  PRESS: "To push something firmly.",
  PRIME: "The most important or best stage.",
  PRINT: "To produce text or images on paper.",
  PRIZE: "An award given for achievement.",
  PROOF: "Evidence that something is true.",
  PROUD: "Feeling pleased about an achievement.",
  RAISE: "To lift something upward.",
  RANGE: "A collection or variety of things.",
  RAPID: "Very fast.",
  RATIO: "A comparison between two amounts.",
  READY: "Prepared for something.",
  REALM: "A kingdom or area of activity.",
  REBEL: "A person who resists authority.",
  REFER: "To mention or direct someone.",
  RIGHT: "Correct or opposite of left.",
  ROCKY: "Covered with rocks.",
  ROUTE: "A way or path to a destination.",
  ROYAL: "Related to a king or queen.",
  RURAL: "Related to the countryside.",
  SAFER: "More protected from danger.",
  SAINT: "A person recognized for holiness.",
  SCALE: "A device used to measure weight.",
  SCENE: "A place where an event happens.",
  SCOPE: "The range of something.",
  SENSE: "A way of understanding or feeling.",
  SHAPE: "The form of an object.",
  SHEET: "A large thin piece of material.",
  SHELL: "A hard outer covering.",
  SHIFT: "To move or change position.",
  SHINE: "To give off light.",
  SHIRT: "A piece of clothing worn on the upper body.",
  SHOCK: "A sudden feeling of surprise.",
  SHORT: "Not long in length.",
  SHOWN: "Presented or displayed.",
  SIGHT: "The ability to see.",
  SINCE: "From a particular time in the past.",
  SKILL: "The ability to do something well.",
  SLICE: "A thin piece cut from something.",
  SMOKE: "The gas produced by burning something.",
  SOLID: "Firm and not liquid.",
  SOLVE: "To find an answer to a problem.",
  SORRY: "Feeling regret or apology.",
  SOUND: "Something heard by the ears.",
  SOUTH: "A direction opposite north.",
  SPARE: "Extra or available for use.",
  SPEED: "How fast something moves.",
  SPEND: "To use money.",
  SPLIT: "To divide into parts.",
  STAFF: "People working for an organization.",
  STAGE: "A raised platform for performers.",
  STAND: "To be upright on your feet.",
  STATE: "A condition or political region.",
  STEAM: "Water in gas form.",
  STEEL: "A strong metal made mostly of iron.",
  STICK: "A thin piece of wood.",
  STILL: "Not moving.",
  STOCK: "Goods kept for sale.",
  STRIP: "A long narrow piece.",
  STUCK: "Unable to move.",
  STYLE: "A particular way of doing something.",
  SUPER: "Excellent or very good.",
  TAKEN: "Carried or brought away.",
  TASTE: "The flavor of something.",
  THEME: "The main subject of something.",
  THICK: "Having a large distance between sides.",
  THING: "An object or item.",
  THOSE: "Plural form of that.",
  TIGHT: "Firmly fixed or held.",
  TIRED: "Needing rest.",
  TOKEN: "An object representing something.",
  TOTAL: "The complete amount.",
  TOUGH: "Strong or difficult.",
  TOWER: "A tall narrow building.",
  TRADE: "The buying and selling of goods.",
  TREAT: "Something special or enjoyable.",
  TREND: "A popular direction or fashion.",
  TRIAL: "A test or court proceeding.",
  TRIBE: "A group of people with shared culture.",
  TRICK: "An action intended to deceive or surprise.",
  TRULY: "In a truthful or genuine way.",
  TWICE: "Two times.",
  UNDER: "Below something.",
  UNION: "A group joined together.",
  UNITY: "The state of being together.",
  UNTIL: "Up to a certain time.",
  UPPER: "Located above.",
  UPSET: "Feeling unhappy or worried.",
  URBAN: "Related to a city.",
  USAGE: "The way something is used.",
  USUAL: "Common or normal.",
  VALUE: "The worth of something.",
  VIRUS: "A tiny infectious agent.",
  VISIT: "To go see someone or somewhere.",
  VITAL: "Extremely important.",
  VOICE: "The sound produced when speaking.",
  WASTE: "Something that is not used properly.",
  WHEEL: "A round object that helps vehicles move.",
  WHERE: "A question asking about location.",
  WHICH: "A word used to ask about choices.",
  WHILE: "A period of time.",
  WHOLE: "Complete and not divided.",
  WHOSE: "Asking who something belongs to.",
  WOMAN: "An adult female human.",
  WORRY: "To feel anxious about something.",
  WORSE: "Of lower quality.",
  WORST: "The lowest or least good.",
  WORTH: "The value of something.",
  WOULD: "A word used to express possibility.",
  WRONG: "Not correct.",
  YOUNG: "Having lived for a short time.",
  YOUTH: "The period of being young."
};

// Only use valid 5-letter words.
// Exactly 250 answers are selected from the word bank.
const validWords = Object.keys(wordBank)
  .filter(word => /^[A-Z]{5}$/.test(word))
  .slice(0, 250);

let unusedWords = [...validWords];

function getRandomWord() {
  if (unusedWords.length === 0) {
    unusedWords = [...validWords];
  }

  const index = Math.floor(Math.random() * unusedWords.length);
  return unusedWords.splice(index, 1)[0];
}

function getHint(word) {
  return wordBank[word];
}

// ==========================================
// WORD CHECKER
// ==========================================

function checkGuess(guess, answer) {
  const result = Array(5).fill("⬛");
  const answerLetters = answer.split("");
  const guessLetters = guess.split("");

  // Correct position first
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
// COMMAND
// ==========================================

module.exports = {
  config: {
    name: "wordle",
    aliases: ["wdl"],
    version: "6.0.0",
    author: "Kaizer",
    role: 0,
    countDown: 3,
    category: "game",
    shortDescription: "Guess the hidden 5-letter word",
    longDescription: "Play Wordle and win random coins.",
    guide: {
      en: "{pn} - Start a game\n{pn} <word> - Submit your guess\n{pn} quit - End your game"
    }
  },

  onStart: async function ({ message, event, args, usersData }) {
    const uid = String(event.senderID);
    const guess = (args[0] || "").toUpperCase();

    // QUIT GAME
    if (guess === "QUIT" || guess === "EXIT") {
      if (!games.has(uid)) {
        return message.reply("❌ Wala kang active Wordle game.");
      }

      games.delete(uid);
      return message.reply("🚪 Wordle game ended.");
    }

    // START GAME
    if (!games.has(uid)) {
      const answer = getRandomWord();

      games.set(uid, {
        answer,
        attempts: 0,
        history: []
      });

      return message.reply(
        "🎮 KAIZER WORDLE\n\n" +
        "Guess the hidden 5-letter word!\n\n" +
        "💡 CLUE:\n" + getHint(answer) + "\n\n" +
        "🟩 Correct letter and position\n" +
        "🟨 Correct letter, wrong position\n" +
        "⬛ Letter not in the word\n\n" +
        "❤️ Attempts: 6\n\n" 
