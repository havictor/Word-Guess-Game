var winCounter = 0;
var pokedex = ["BULBASAUR", "IVYSAUR", "VENUSAUR", "CHARMANDER", "CHARMELEON", "CHARIZARD", "SQUIRTLE", "WARTORTLE", "BLASTOISE"];
var wordChoice = "";
var guessCounter = 12;
var guessLetters = [];
var guessWord = [];
var guessStatus = [];
var press = "";

window.onload = function() {
    newGame();
}

function newGame() {
    guessLetters = [];
    guessStatus = [];
    var n = Math.floor((Math.random() * pokedex.length));
    wordChoice = pokedex[n];
    guessWord = wordChoice.split("");
    for (i=0; i < guessWord.length; i++) {
        guessStatus.push("_");
    };
    document.getElementById("guessStatus").innerHTML=guessStatus;
    guessCounter = 12;
};


document.addEventListener("keypress", function(e) {
    press = event.key.toUpperCase();
    for (j = -1; j < guessLetters.length; j++) {
        if (press !== guessLetters[j]) {


            guessLetters.push(press);
            guessCounter -= 1;  
            for (k = 0; k < guessWord; k++) {
 
                
                if (press === guessWord[k]) {
                    guessStatus[k] = guessWord[k];
                }
            }
            alert(press);
        }
    }
    document.getElementById("guessLetters").innerHTML = guessLetters;
    document.getElementById("guessStatus").innerHTML = guessStatus;
    document.getElementById("guessCounter").innerHTML = guessCounter;
});

if (guessStatus.toString === wordChoice.toString) {
    alert("Congratulations, you win");
    winCounter += 1;
    document.getElementById("winCounter").innerHTML = "Wins: "+winCounter;
    newGame();
};

if (guessCounter <= 0) {
    alert("Sorry, you're out of guesses")
    newGame();
};