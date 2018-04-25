var winCounter = 0;
var pokedex = ["BULBASAUR", "IVYSAUR", "VENUSAUR"];
var wordChoice = "";
var guessCounter = 12;
var guessLetters = [];
var guessWord = [];
var guessStatus = [];

newGame();

function newGame() {
    guessLetters = [];
    var n = Math.floor((Math.random() * pokedex.length));
    wordChoice = pokedex[n]; //needs to push word into new 
    guessWord = wordChoice.split("");
    for (i=0; i < guessWord.length; i++) {
        guessStatus.push("_");
    }
    guessCounter = 12;
};


window.addEventListener("keydown", function (e) {
    var press = e.toUpperCase;
    //alert(press);
    for (j = 0; j < guessLetters.length; j++) {
        if (press !== guessLetters[j]) {
            for (k = 0; k < guessWord; k++) {
                if (press === guessWord[k]) {
                    guessStatus[k] = guessWord[k];
                    guessCounter -= 1;
                }
                else guessStatus.push(press);
                guessCounter -= 1;
            }
        }
    }
});

if (guessStatus === wordChoice) {
    alert("Congratulations, you win");
    winCounter += 1;
    newGame();
};

if (guessCounter === 0) {
    alert("Sorry, you're out of guesses")
    newGame();
};

//onpress event of keyboard 

//guessWord changes (to add the new letters) with each letter guess,  tied to onpress event
//guessCounter decreases
//push letter to guessLetters




//win condition:
//guess === word
//increase win count
//clears guessLetters
//chooses new wordChoice from word (math.random())
//guessCounter = 12

//else  lose condition (guessCounter === 0)
//clears guessLetters
//choose new wordChoice from word (math.random())






/*right column.
Press any key to get started
Wins: <count>
Current Word:
______________
Number of Guesses:
<Count decreasing>
Letters already guessed:
<Letters Guessed>
*/