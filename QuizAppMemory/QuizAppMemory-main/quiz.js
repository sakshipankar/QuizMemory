const questions = [
  
  { question: "What is the name of the main character in 'Naruto'?", options: ["Naruto Uzumaki", "Sasuke Uchiha", "Sakura Haruno", "Kakashi Hatake"], answer: "Naruto Uzumaki" },
  { question: "Which anime features the Straw Hat Pirates?", options: ["One Piece", "Naruto", "Fairy Tail", "Bleach"], answer: "One Piece" },
  { question: "In 'Dragon Ball Z', what is Goku's Saiyan name?", options: ["Kakarot", "Vegeta", "Bardock", "Raditz"], answer: "Kakarot" },
  { question: "What is the deadly notebook called in 'Death Note'?", options: ["Death Note", "Kira Notebook", "Shinigami Note", "Black Book"], answer: "Death Note" },
  { question: "Which anime features a character named Edward Elric?", options: ["Fullmetal Alchemist", "Attack on Titan", "Hunter x Hunter", "Black Clover"], answer: "Fullmetal Alchemist" },
  
 
  { question: "Who is the captain of Squad 7 in 'Bleach'?", options: ["Sajin Komamura", "Toshiro Hitsugaya", "Byakuya Kuchiki", "Kenpachi Zaraki"], answer: "Sajin Komamura" },
  { question: "What is the name of Luffy's brother in 'One Piece'?", options: ["Portgas D. Ace", "Shanks", "Sabo", "Zoro"], answer: "Portgas D. Ace" },
  { question: "Who is the main villain in the 'Naruto: Shippuden' series?", options: ["Madara Uchiha", "Pain", "Orochimaru", "Itachi Uchiha"], answer: "Madara Uchiha" },
  { question: "What is the name of the titan that Eren transforms into in 'Attack on Titan'?", options: ["Founding Titan", "Attack Titan", "Colossal Titan", "Armored Titan"], answer: "Attack Titan" },
  { question: "Which anime features a protagonist with the power of 'Geass'?", options: ["Code Geass", "Steins;Gate", "Erased", "No Game No Life"], answer: "Code Geass" },

  
  { question: "What is the main goal of Gon Freecss in 'Hunter x Hunter'?", options: ["To become a Hunter", "To find his father", "To defeat Hisoka", "To train Killua"], answer: "To find his father" },
  { question: "In 'Tokyo Ghoul', what is Kaneki Ken transformed into?", options: ["A Ghoul", "A Vampire", "A Shinigami", "A Demon"], answer: "A Ghoul" },
  { question: "What is the main setting for the anime 'Sword Art Online'?", options: ["A virtual MMORPG world", "A space station", "A haunted mansion", "A magical forest"], answer: "A virtual MMORPG world" },
  { question: "Which anime revolves around alchemy and the search for the Philosopher's Stone?", options: ["Fullmetal Alchemist", "Re:Zero", "Fate/Stay Night", "Black Clover"], answer: "Fullmetal Alchemist" },
  { question: "What is the primary job of Saitama in 'One Punch Man'?", options: ["A hero for fun", "A teacher", "A scientist", "A soldier"], answer: "A hero for fun" },
  
  
  { question: "Which studio produced 'My Neighbor Totoro'?", options: ["Studio Ghibli", "Madhouse", "Toei Animation", "Bones"], answer: "Studio Ghibli" },
  { question: "Who is the author of the manga 'Attack on Titan'?", options: ["Hajime Isayama", "Masashi Kishimoto", "Eiichiro Oda", "Tite Kubo"], answer: "Hajime Isayama" },
  { question: "In 'Demon Slayer', what is Tanjiro Kamado's primary weapon?", options: ["A Nichirin Sword", "A Bow", "A Spear", "A Gun"], answer: "A Nichirin Sword" },
  { question: "What is Light Yagami's alias in 'Death Note'?", options: ["Kira", "Ryuk", "L", "Near"], answer: "Kira" },
  { question: "What year did the anime 'Neon Genesis Evangelion' first air?", options: ["1995", "1998", "2000", "1992"], answer: "1995" },
  
  
  { question: "What is the name of the cat-like spirit in 'My Neighbor Totoro'?", options: ["Totoro", "Catbus", "Jiji", "Nyanko"], answer: "Totoro" },
  { question: "Who is the Flame Hashira in 'Demon Slayer'?", options: ["Rengoku Kyojuro", "Giyu Tomioka", "Shinobu Kocho", "Tengen Uzui"], answer: "Rengoku Kyojuro" },
  { question: "Which anime features the character Levi Ackerman?", options: ["Attack on Titan", "Black Clover", "One Piece", "Bleach"], answer: "Attack on Titan" },
  { question: "What is the name of the school in 'My Hero Academia'?", options: ["UA High School", "Shiketsu Academy", "Hero High", "Honneka High"], answer: "UA High School" },
  { question: "Who created 'One Piece'?", options: ["Eiichiro Oda", "Hajime Isayama", "Masashi Kishimoto", "Akira Toriyama"], answer: "Eiichiro Oda" },
  
  
  { question: "Which anime features a death game called 'Future Diary'?", options: ["Mirai Nikki", "No Game No Life", "Steins;Gate", "Death Parade"], answer: "Mirai Nikki" },
  { question: "What is Pikachu's type in 'Pokemon'?", options: ["Electric", "Fire", "Water", "Psychic"], answer: "Electric" },
  { question: "What is Gon's primary weapon in 'Hunter x Hunter'?", options: ["A fishing rod", "A sword", "A boomerang", "A spear"], answer: "A fishing rod" },
  { question: "Who is the captain of the 10th Division in 'Bleach'?", options: ["Toshiro Hitsugaya", "Kenpachi Zaraki", "Byakuya Kuchiki", "Rukia Kuchiki"], answer: "Toshiro Hitsugaya" },
  { question: "In 'Naruto', what is the name of Naruto's father?", options: ["Minato Namikaze", "Jiraiya", "Hiruzen Sarutobi", "Hashirama Senju"], answer: "Minato Namikaze" },
];


let score = 0;
let askedQuestions = [];

// Get a random question from the array that hasn't been asked yet
function getRandomQuestion() {
  const availableQuestions = questions.filter(( index) => !askedQuestions.includes(index));
  const randomIndex = Math.floor(Math.random() * availableQuestions.length);
  const randomQuestion = availableQuestions[randomIndex];

  // Mark this question as asked
  askedQuestions.push(questions.indexOf(randomQuestion));
  return randomQuestion;
}

// Load a random question
function loadQuestion() {
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");

  const current = getRandomQuestion();
  questionElement.textContent = current.question;
  optionsElement.innerHTML = "";

  current.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.classList.add("btn",  "opt");
    button.textContent = option;
    button.onclick = () => checkAnswer(option);
    optionsElement.appendChild(button);
  });
}

// Check the answer
function checkAnswer(selectedOption) {
  const currentQuestion = questions[askedQuestions[askedQuestions.length - 1]]; // Get the current question
  if (selectedOption === currentQuestion.answer) {
    score++;
  }
  nextQuestion();
}

// Load the next question
function nextQuestion() {
  if (askedQuestions.length < 15) {
    loadQuestion();
  } else {
    showResults();
  }
}

// Show results
function showResults() {
  const container = document.querySelector(".card");
  container.innerHTML = `
    <h2 class="text-center">Your Score: ${score}/15</h2>
    <div class="text-center mt-4">
      <a href="home.html" class="btn btn-primary">Go to Home</a>
    </div>
  `;
}

// Initialize quiz
window.onload = loadQuestion;