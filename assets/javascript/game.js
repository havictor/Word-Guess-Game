var winCounter = 0;
var pokedex = ["BULBASAUR", "IVYSAUR", "VENUSAUR", "CHARMANDER", "CHARMELEON", "CHARIZARD", "SQUIRTLE", "WARTORTLE", "BLASTOISE"];
var wordChoice = "";
var guessCounter = 12;
var guessLetters = [];
var guessWord = [];
var guessStatus = [];
var press = "";
var rightCounter = 0;
var pokedexOfChoice = 0;

window.onload = function() {
    newGame();
}

function newGame() {
    guessLetters = [];
    guessStatus = [];
    var n = Math.floor((Math.random() * pokedex.length));
    wordChoice = pokedex[n];
    pokedexOfChoice = n + 1;
    guessWord = wordChoice.split("");
    for (i=0; i < guessWord.length; i++) {
        guessStatus.push("_");
    };
    document.getElementById("guessStatus").innerHTML=guessStatus;
    guessCounter = 12;
    document.getElementById("guessLetters").innerHTML = guessLetters;
    document.getElementById("guessCounter").innerHTML = guessCounter;
};

/*
function winningImage() {
    var image = document.createAttribute("IMG");
    image.setAttribute("src", "pokedexOfChoice+".png"");
    document.getElementById("winner").innerHTML;

}*/

document.addEventListener("keypress", function(e) {
    press = event.key.toUpperCase();
    guessLetters.push(press);                
    for (k = 0; k < guessWord.length; k++) {
        if (press == guessWord[k]) {
            guessStatus[k] = press;
            document.getElementById("guessStatus").innerHTML = guessStatus;
            rightCounter += 1;
        }
    }
        if (rightCounter == 0) {
            guessCounter -= 1;
        }
        else {
            rightCounter = 0
        } 
    document.getElementById("guessLetters").innerHTML = guessLetters;
    document.getElementById("guessStatus").innerHTML = guessStatus;
    document.getElementById("guessCounter").innerHTML = guessCounter;

    if (guessStatus.toString() == guessWord.toString()) {
        alert("Congratulations, you win");
        winCounter += 1;
        document.getElementById("winCounter").innerHTML = "Wins: "+winCounter;
//        winningImage();
        newGame();
    };

    if (guessCounter <= 0) {
        alert("Sorry, you're out of guesses");
        newGame();
    }
});

