var Letter = require("./Letter");


var Word = function(currentWord) {

    this.currentWord = currentWord;
    this.letterArray = [];
    for (var i in currentWord) {
        this.letterArray.push(new Letter(currentWord[i]));
        console.log(this.letterArray[i]);
    }

    this.trueOrFalse = function(userLetter) {

        for (var i in currentWord) {

            var letter = new Letter(currentWord[i]);
            //console.log(this.letter);
            this.letterArray[i].checkLetter(userLetter);
            //console.log(this.letter.checkLetter(userLetter));
            console.log(this.letterArray[i].guessed);
        }
        console.log("*********************");
    }

    this.displayWord = function() {
        var stringBuilder = " ";
        for (var i in this.letterArray) {
            stringBuilder += this.letterArray[i].toString();
        }
        return stringBuilder;
    }
}


module.exports = Word;


var ex = new Word("example");
ex.trueOrFalse("p");

ex.displayWord();
console.log(ex.displayWord());