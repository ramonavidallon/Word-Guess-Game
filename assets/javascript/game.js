// GUESSED WORDS //
var playerNames = [
    "GRIFFEY",
    "CORA",
    "RODRIGUEZ",
    "ICHIRO",
    "HERNANDEZ",
    "MARTINEZ",
    "OLERUD",
    "SASAKI",
    "WILSON",
    "BUHNER",
]

var maxNumGuesses = 8;
var numWins = 0;
var numLosses = 0;
var numGuessesLeft = 0;
var guessedLetters = [];
var isComplete = false;
var Word;
var ansWordArr = [];


function setup() {
    Word = playerNames[Math.floor(Math.random() * playerNames.length)];

    
    ansWordArr = [];

    // FOR LOOP TO ADD '_' ansWordArr //
    for (let i = 0; i < Word.length; i++) {
        ansWordArr[i] = "_";
    }

    //VARIABLE RESET //
    numGuessesLeft = maxNumGuesses;
    guessedLetters = [];

//CLEARS PLAYER-PICTURE TO DISPLAY PIC//
document.getElementById("player-picture").src= "";

//COLOR REMOVAL //
document.getElementById("numGuesses").style.color = "";

//DISPLAYS//
updateScreen();
};

//CREATING A FUNCTION TO UPDATE HTML//
function updateScreen() {
    document.getElementById("numGuesses").innerText = numGuessesLeft;
    document.getElementById("numWins").innerText = numWins;
    document.getElementById("numLosses").innerText = numLosses;
    document.getElementById("guessedLetters").innerText = guessedLetters;
    document.getElementById("wordAnswer").innerText = ansWordArr.join("");

};

//FUNCTION FOR THE PRESSED KEY//
function checkGuess(letter) {
    //IF LETTER IS NOT IN guessedLetters ARRAY THEN PUSH LETTER TO ARRAY//
    if (guessedLetters.indexOf(letter) === -1) {
        guessedLetters.push(letter);
        //IF LETTER NOT IN THE ANSWER WORD THEN -1//
        if (Word.indexOf(letter) === -1) {
            numGuessesLeft--;
            if (numGuessesLeft <= 3) {
                document.getElementById("numGuesses").style.color = "#ff0000";
            }
        
        } else {
            for (var i = 0; i < Word.length; i++) {
                if (letter === Word[i]) {
                    ansWordArr[i] = letter;
                }
            }
        }
    }

};
//WINNER FUNCTION
function isWinner() {
    //ADDING +1 TO THE ansWordArr | CHANGE isComplete = true//
    if (ansWordArr.indexOf("_") === -1) {
        numWins++;
        isComplete = true;
        if(Word === "GRIFFEY") {
            document.getElementById("player-picture").src = "assets/images/griffey.jpg"; alt="griffey";
        } else if (Word === "CORA") {
            document.getElementById("player-picture").src = "assets/images/cora.jpg"; alt="cora";
        } else if (Word === "RODRIGUEZ") {
            document.getElementById("player-picture").src = "assets/images/rodriguez.jpg"; alt="rodriguez";
        } else if (Word === "ICHIRO") {
            document.getElementById("player-picture").src = "assets/images/ichiro.jpg"; alt="ichiro";
        } else if (Word === "HERNANDEZ") {
            document.getElementById("player-picture").src = "assets/images/hernandez.jpg"; alt="hernandez";
        } else if (Word === "MARTINEZ") {
            document.getElementById("player-picture").src = "assets/images/martinez.jpg"; alt="martinez";
        } else if (Word === "OLERUD") {
            document.getElementById("player-picture").src = "assets/images/olerud.jpg"; alt="olerud";
        } else if (Word === "SASAKI") {
            document.getElementById("player-picture").src = "assets/images/sasaki.jpg"; alt="sasaki";
        } else if (Word === "WILSON") {
            document.getElementById("player-picture").src = "assets/images/wilson.jpg"; alt="wilson";
        } else if (Word === "BUHNER") {
            document.getElementById("player-picture").src = "assets/images/buhner.jpg"; alt="buhner";
        }

    }
};
//LOSER FUNCTION//
function isLoser() {
    //IF numGuessesLeft IS 0 THEN +1 to numLosess | CHANGE isComplete to true//
    if(numGuessesLeft <= 0) {
        numLosses++;
        isComplete = true;
        }
};

//KEY PRESS (onkeyup)//
document.onkeyup = function(event) {
    if (isComplete) {
        setup();
        isComplete = false;
    } else {
        if(event.keyCode >= 65 && event.keyCode <= 90)
            checkGuess(event.key.toUpperCase());
            updateScreen();
            isWinner();
            isLoser();
        }
    }



setup();
updateScreen();

console.log(Word);


//MUSIC FUNCTION//
/*document.addEventListener('keydown', function() {
    if (keyCode == 65) {
      document.getElementById('audio').play();
    }
  });*/
