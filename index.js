var Word = require("./Word");
var inquirer = require('inquirer');
var guessesRemaining = 10;

var show = "";

var wordArray = ["abruptly", "absurd", "abyss", "affix", "askew", "avenue", "buffalo", "disavow", "buffoon", "caliph"];

var randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
console.log(randomWord);


function start() {



    console.log("Guess this word: " + randomWord.replace(/./g, " _ "));



    promptLetter();

    // var word = new Word(randomWord, inputLetter);
    //word.formWord();



}

function promptLetter() {


    console.log('');


    if (guessesRemaining > 0) {
        inquirer.prompt([{
            type: "value",
            name: "letter",
            message: "Guess a Letter: "
        }]).then(function(userInput) {

            var inputLetter = userInput.letter.toLowerCase();

            console.log("You typed: " + inputLetter);

            for (var i in randomWord) {

                if (inputLetter === randomWord[i]) {
                    //randomWord[i] = inputLetter;

                    var index = randomWord.indexOf(randomWord[i]);
                    randomWord[i] = inputLetter;


                    show += randomWord[i];
                    guessesRemaining--;
                    console.log("You guessed a letter! You have " + guessesRemaining + " left");
                    console.log(randomWord);


                } else {
                    //randomWord[i] = " _ ";
                    show += " _ ";
                }
            }
            console.log(show.trim());

            if (randomWord === show) {
                console.log("You won!");
            } else {
                randomWord = show;
                promptLetter(randomWord);
                //console.log("You lost!");
            }


        });
    }
}

start();