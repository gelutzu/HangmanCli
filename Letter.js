var Letter = function(char) {

    this.char = char;
    this.guessed = false;



    this.checkLetter = function(userLetter) {

        if (this.char === userLetter) {
            this.guessed = true;
            return true;
        } else {
            this.guessed = false;
            return false;
        }
    }

    this.toString = function() {

        if (this.guessed) {
            return this.char;

        } else {
            return " _ ";
        }
    }
};

module.exports = Letter;


/*
var example = new Letter("x");
example.checkLetter("x");
console.log(example.toString());
*/