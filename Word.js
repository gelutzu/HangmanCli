var Letter = require("./Letter");

var Word = function(lettersArray) {

    this.lettersArray = [];
    this.wordArray = new Array();

    this.formWord = function() {

        for (var i in lettersArray) {

            var letterInWord = new Letter(lettersArray[i]);
            letterInWord.guessLetter();
            //console.log(letterInWord.guessLetter());
            this.wordArray.push(letterInWord.guessLetter());
            console.log(this.wordArray.join());
            

        }

    }


}

var ex = new Word(['w','o','r','d']);
ex.formWord();
