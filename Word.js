var Letter = require("./Letter");


var Word = function(selectedWord, letter) {
    console.log(selectedWord);
    this.letter = letter;
    this.selectedWord = selectedWord;
    this.wordArray = [];

    this.formWord = function() {


        for (var i in selectedWord) {

            //console.log(selectedWord[i]);

            this.letter = new Letter(selectedWord[i]);

            //console.log(letterInWord.char);
            this.letter.compareLetter();

            this.wordArray.push(letterInWord.char);

        }
        console.log(this.wordArray);
    }
}


module.exports = Word;
/*
var ex = new Word("example");
ex.formWord();
*/