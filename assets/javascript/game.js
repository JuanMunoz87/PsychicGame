// The array of all the alphabet
const compLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l","m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// A random generator 
let randomLetter = compLetter[Math.floor(Math.random() * compLetter.length)];
console.log(randomLetter);

// Variables
let wins = 0;
let losses = 0;
let remainingGuess = 4;
let playerGuessesSoFar = [];

// References
const body = document.getElementsByTagName("body");
const winsText = document.getElementById("wins");
const lossesText = document.getElementById("losses");
const remainGuess = document.getElementById("remainGuesses");
const userGuessSoFarText = document.getElementById("actualGuesses");

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

const remainGuessUpdate = function() {
    remainGuess.innerHTML = remainingGuess;
};
remainGuessUpdate();

// Update the the player guess
const guessesUpdate = function() {
    userGuessSoFarText.innerHTML = playerGuessesSoFar.join(" ");
};
guessesUpdate();

//let compLetter = ["a", "b", "c",];
//let randomLetter = compLetter[Math.floor(Math.random() * compLetter.length)];
const reset = function() {
    maxGuesses = 3;
    remainingGuess = 3;
    playerGuessesSoFar = [];
    randomLetter = compLetter[Math.floor(Math.random() * compLetter.length)];
    console.log(randomLetter);
};


//================== Main Progress ================//
// key event function
document.onkeyup = function(event) {

    remainingGuess--;

    let playerGuess = userGuessSoFarText.textContent = event.key;

    playerGuessesSoFar.push(playerGuess);

    guessesUpdate();
    remainGuessUpdate();


    if(playerGuess === randomLetter) {
        wins++;
        scoreUpdate();
        reset();
    }
    else if(remainingGuess === 0) {
        losses++;
        loseUpdate();
        reset();
    }

};








