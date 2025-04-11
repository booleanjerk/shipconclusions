let lastQuestionIndex = -1;

const boardSize = 5;
let correctStreak = 0;
let questionCount = 0;
let shipLocations = [];
let askedQuestions = new Set();
let guessCount = 0;

function startGame() {
 correctStreak = 0;
 questionCount = 0;
 guessCount = 0;
 askedQuestions.clear();
 shipLocations = generateShips(4);
 document.getElementById("gameBoard").style.display = "grid";
 setupBoard();
 updateStreakDisplay();
 askQuestion();
}

function generateShips(count) {
 const positions = new Set();
 while (positions.size < count) {
   positions.add(Math.floor(Math.random() * boardSize * boardSize));
 }
 return Array.from(positions);
}

function setupBoard() {
 const board = document.getElementById("gameBoard");
 board.innerHTML = "";
 for (let i = 0; i < boardSize * boardSize; i++) {
   const cell = document.createElement("button");
   cell.className = "cell";
   cell.disabled = true;
   cell.onclick = () => handleGuess(i);
   board.appendChild(cell);
 }
}

function askQuestion() {
    if (askedQuestions.size === questions.length) {
      askedQuestions.clear(); // silently restart
    }
  
    let qIndex;
    do {
      qIndex = Math.floor(Math.random() * questions.length);
    } while (askedQuestions.has(qIndex) || qIndex === lastQuestionIndex);
  
    lastQuestionIndex = qIndex;
    askedQuestions.add(qIndex);
    questionCount++;
    document.getElementById("questionCount").textContent = `Questions asked: ${questionCount}`;
  
    const q = questions[qIndex];
    const questionEl = document.getElementById("question"); // show question here
    const answersEl = document.getElementById("answers");   // show options here
    questionEl.textContent = q.q;
    answersEl.innerHTML = "";
  
    const shuffledOptions = q.options
      .map((opt, i) => ({ text: opt, index: i }))
      .sort(() => Math.random() - 0.5);
  
    shuffledOptions.forEach(opt => {
    const btn = document.createElement("button");
      btn.textContent = opt.text;
      btn.onclick = () => checkAnswer(opt.index === q.correct);
      answersEl.appendChild(btn);

    /* TO MAKE CORRECT ANSWERS RED, comment out 68-71 and replace with the below
      const btn = document.createElement("button");
btn.textContent = opt.text;
if (opt.index === q.correct) {
  btn.style.backgroundColor = "red";
}
btn.onclick = () => checkAnswer(opt.index === q.correct);
answersEl.appendChild(btn);
    //end of new bit*/


    });
  } 


function checkAnswer(isCorrect) {
 if (isCorrect) {
   correctStreak++;
   updateStreakDisplay();
   if (correctStreak === 3) {
     enableBoard();
     document.getElementById("question").textContent = "You may now guess!";
     document.getElementById("answers").innerHTML = "";
   } else {
     askQuestion();
   }
 } else {
   correctStreak = 0;
   updateStreakDisplay();
   askQuestion();
 }
}

function updateStreakDisplay() {
 for (let i = 1; i <= 3; i++) {
   document.getElementById(`streak${i}`).className = i <= correctStreak ? "green" : "";
 }
}

function enableBoard() {
 document.querySelectorAll(".cell").forEach(cell => cell.disabled = false);
}

function handleGuess(index) {
    const cells = document.querySelectorAll(".cell");
    cells[index].disabled = true;
    guessCount++;
    if (shipLocations.includes(index)) {
      cells[index].textContent = "🚢";
      shipLocations = shipLocations.filter(loc => loc !== index);
      if (shipLocations.length === 0) {
        // Hide all game elements
        document.getElementById("gameBoard").style.display = "none";
        document.getElementById("qanda").style.display = "none";
        document.getElementById("streak").style.display = "none";
        document.getElementById("questionCount").style.display = "none";
        document.querySelector("h1").style.display = "none"; // <-- hide the h1
        document.querySelector("button").style.display = "none"; // <-- hide the New Game button

  
        // Show win message
        document.getElementById("summaryText").textContent = 
          `It took you ${questionCount} questions and ${guessCount} guesses to win! Press refresh to play again!`;
        document.getElementById("winMessage").style.display = "block";
        return;
      }
    } else {
        cells[index].textContent = "🌊";
      }
    
      correctStreak = 0;
      updateStreakDisplay();
    
      if (shipLocations.length > 0) {
        askQuestion(); // only ask if game is not over
        document.querySelectorAll(".cell").forEach(cell => cell.disabled = true);
      }}

      window.onload = () => {
        startGame();
      };
      