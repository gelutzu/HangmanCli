var Letter = function(char) {

    this.char = char;
    this.guessed = false;

    this.getLetter = function() {

        if (this.guessed) {

            //this.char = this.letterToGuess;
            console.log(this.char);
        } else {
            this.char = "_";
            console.log(this.char);
        }
    };

    this.guessLetter = function() {

        var letterToGuess = process.argv[2];
        console.log(letterToGuess);

        if (letterToGuess === char) {

            this.guessed = true;
            this.getLetter();

        } else {
            this.guessed = false;
            this.getLetter();
        }

    }

};

var example = new Letter('a');
console.log(example.char);
example.guessLetter();