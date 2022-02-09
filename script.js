// Variables for the DOM elements
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const settingsBtn = document.getElementById("settings-btn");
const difficultySelect = document.getElementById("difficulty");

// Array
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];

// 1. Funktion för att slumpa fram ett random ord
// 2. Lägga till ordet till DOM/uppdatera DOM
// 3. Lägg till event listener till text elementet
// 4. Uppdatera score
// 5. Input ska automatiskt vara markerad med cursor
// 6. Fixa någon typ av timer som räknar ner
// 7. Uppdatera tiden
// 8. Ska kunna bli Game Over
// 9. Fixa toggle på settings button och settings
// 10. Kunna spara till localStorage och hämta från localStorage
// 11. Kunna välja svårighetsgrad
// 12. Kunna ändra tiden beroende på vilken svårighetsgrad vi väljer

// Initialize word
let randomWord;

// Initialize score
let score = 0;

// Intialize time
let time = 10;

// 5. Focus på input vid start
text.focus();

// 6. Create some kind of timer and count down
const timeInterval = setInterval(updateTime, 1000);

// 1. Get random word from array
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

//console.log(getRandomWord());

// 2. Add word to DOM
function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

addWordToDOM();

// 4. Update score function
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

// 7. Update time
function updateTime() {
  time--;

  timeEl.innerHTML = time + "s";

  if (time === 0) {
    clearInterval(timeInterval);

    gameOver();
  }
}

// 8. Game Over
function gameOver() {
  endgameEl.innerHTML = `<h1>Time ran out!</h1> <p>Your final score is ${score}</p><button onclick="location.reload()">Reload</button>`;

  endgameEl.style.display = "flex";
}

// 3. Lägg till event listener till input
text.addEventListener("input", (event) => {
  const insertedText = event.target.value;
  //console.log(insertedText);

  if (insertedText === randomWord) {
    addWordToDOM();

    updateScore();

    // clear
    event.target.value = "";
  }
});

// 9. Setting button
settingsBtn.addEventListener("click", () => settings.classList.toggle("hide"));
