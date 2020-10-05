// References
const winsText = document.getElementById("wins");
const lossesText = document.getElementById("losses");
const remainGuess = document.getElementById("remainGuesses");
const userGuessSoFarText = document.getElementById("actualGuesses");


// The array of all the alphabet letters
const compLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l","m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Variables
let wins = 0;
let losses = 0;
let remainingGuess = 8;
let playerGuessesSoFar = [];
let randomLetter;


//=================== UPDATES =====================//
// Update the player's wins

const scoreUpdate = function() {
   winsText.innerHTML = wins;
};
scoreUpdate();

// Update the losses
const loseUpdate = function() {
   lossesText.innerHTML = losses;
};
loseUpdate();

// Update the player ramining numbers
const remainGuessUpdate = function() {
   remainGuess.innerHTML = remainingGuess;
};

// Update the the player guess
const guessesUpdate = function() {
   userGuessSoFarText.innerHTML = playerGuessesSoFar.join(" ");
};
guessesUpdate();

//=== Reset ===// 
const reset = function() {
   remainingGuess = 8;
   playerGuessesSoFar = [];
   // Random letter generator
   randomLetter = compLetter[Math.floor(Math.random() * compLetter.length)];
   console.log(randomLetter)
   guessesUpdate();
   remainGuessUpdate();
};
reset();

//================== Main Progress ================//
// key event function
document.onkeyup = function(event) {
    
   remainingGuess--;
    
   let playerGuess = event.key;
   
   playerGuessesSoFar.push(playerGuess);

   guessesUpdate();
   remainGuessUpdate();

   if((remainingGuess > 0) || (remainingGuess === 0 )) {
      if(playerGuess === randomLetter) {
      wins++;
      scoreUpdate();
      reset();
      } else if(remainingGuess === 0) {
         losses++;
         loseUpdate();
         reset();
      }
   }

};

