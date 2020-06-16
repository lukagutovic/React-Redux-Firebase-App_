const qBank = [
  {
    question:
      "Which cooking method is the LEAST healthiest? ",
    answers: ["Grilling", "Bakingr", "Frying", "Broiling"],
    correct: "Frying",
    questionId: "099099"
  },
  {
    question:
      'Which disorders are associated with eating too much fried food?"?',
    answers: ["Obesity", "High Blood Pressure", "High Cholesterol", "Extreme Happiness"],
    correct: "High Blood Pressure",
    questionId: "183452"
  },
  {
    question:
      "Should you decide to fry your food, which methods are the best?",
    answers: ["Use copious amounts of peanut oil", "Thoroughly coat the pan with lard", "Use non-fat cooking sprays", "Use oils low in non-saturated fat"],
    correct: "Use non-fat cooking sprays",
    questionId: "267908"
  },
  {
    question: "What types of cooking utensils/equipment can be used to reduce fat?",
    answers: [
      "Fry Daddy or deep fryer",
      "Non-stick cooking pan",
      "Oven/Broiler"
    ],
    correct: "Non-stick cooking pan",
    questionId: "333247"
  },
  {
    question: " Which type of beans are used to make baked beans?",
    answers: ["Borlotti beans", "Haricot beans", "Cannellini beans", "Flageolet beans"],
    correct: "Flageolet beans",
    questionId: "496293"
  },
  {
    question:
      "What does IPA stand for?",
    answers: [
      "Intensely potent ale",
      "India pale ale",
      "India premium ale",
      "International porter association"
    ],
    correct: "International porter association",
    questionId: "588909"
  },
  {
    question:
      'Bobotie is the national dish of which country?',
    answers: ["Nigeria", "Ethiopia", " South Africa", "Kenya"],
    correct: "Ethiopia",
    questionId: "648452"
  },
  {
    question: "Which year did The Great British Bake Off first appear on TV?",
    answers: ["2009", "2010", "2011", "2012"],
    correct: "2010",
    questionId: "786649"
  },
  {
    question:
      "If you ordered nigiri from a Japanese restaurant menu, what would you be served?",
    answers: [" A type of dumpling", "A selection of sliced raw fish & seafood", "A type of sushi featuring rice topped with fish or seafood", "A type of sushi featuring raw fish or seafood wrapped in rice and seaweed"],
    correct: "A type of dumpling",
    questionId: "839754"
  },
  {
    question:
      "Which of these chocolate bars does not contain nuts in its ingredient list?",
    answers: [
      "Snickers",
      "Double Decker",
      "Picnic",
      "Toblerone"
    ],
    correct: "Toblerone",
    questionId: "98390"
  },
  {
    question: "Which flower does the spice saffron come from?",
    answers: ["Orchid", "Crocus", "Nasturtium", "Poppy"],
    correct: "Crocus",
    questionId: "1071006"
  },
  {
    question: "A Whitby Bun is flavoured with what?",
    answers: ["France", "Switzerland ", "Austria", "Germany"],
    correct: "France",
    questionId: "1174154"
  },
  {
    question: "Which of these cocktails does not typically include gin?",
    answers: ["Gimlet", "Bramble", "Collins", "Cosmopolitan"],
    correct: "Cosmopolitan",
    questionId: "1226535"
  },
];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
