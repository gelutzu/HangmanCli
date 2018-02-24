var Letter = function(char, word) {

    this.char = char;
    this.word = word;
    this.guessed = false;

    var display = " ";

    this.compareLetter = function() {

        for (var i in word) {

            if (word[i] === char) {
                this.guessed = true;
                display += word[i];

            } else {
                this.guessed = false;
                display += " _ ";

            }
        }
        console.log(display);
    }
};

module.exports = Letter;


/*
var example = new Letter('o', 'albino');
console.log(example.char);
example.compareLetter();
console.log(example.guessed);
*/