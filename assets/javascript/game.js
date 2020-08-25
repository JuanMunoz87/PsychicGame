// References
const body = document.getElementsByTagName("body");
const winsText = document.getElementById("wins");
const lossesText = document.getElementById("losses");
const remainGuess = document.getElementById("remainGuesses");
const userGuessSoFarText = document.getElementById("actualGuesses");


// The array of all the alphabet letters
const compLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l","m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Variables
let wins = 0;
let losses = 0;
let remainingGuess = 4;
let playerGuessesSoFar = [];


//=================== UPDATES =====================//
// Update the player's wins

const scoreUpdate = function() {
    winsText.innerHTML = wins;
};
//scoreUpdate();

// Update the losses
const loseUpdate = function() {
    lossesText.innerHTML = losses;
};
//loseUpdate();

const remainGuessUpdate = function() {
    remainGuess.innerHTML = remainingGuess;
};
//remainGuessUpdate();

// Update the the player guess
const guessesUpdate = function() {
    userGuessSoFarText.innerHTML = playerGuessesSoFar.join(" ");
};
//guessesUpdate();

// Random letter generator
let randomLetter = compLetter[Math.floor(Math.random() * compLetter.length)];

const reset = function() {
    remainingGuess = 4;
    playerGuessesSoFar = [];
    randomLetter = compLetter[Math.floor(Math.random() * compLetter.length)];
    guessesUpdate();
    remainGuessUpdate();
};

//================== Main Progress ================//
// key event function
document.onkeyup = function(event) {

    let playerGuess = userGuessSoFarText.textContent = event.key;

    remainingGuess--;

    playerGuessesSoFar.push(playerGuess);

    guessesUpdate();
    remainGuessUpdate();

    if(remainingGuess > 0) {
        if(playerGuess == randomLetter) {
        wins++;
        scoreUpdate();
        reset();
        }
    }
    else if(remainingGuess == 0) {
        losses++;
        loseUpdate();
        reset();
    }
};








