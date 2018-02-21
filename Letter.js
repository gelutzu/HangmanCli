var Letter = function(char) {

    this.char = char;
    this.guessed = false;

    this.getLetter = function() {

        if (this.guessed) {

            console.log(this.char);
           // Letter.prototype.toString = function() {
             //   var greeting = 'My letter is ' + this.char;
            //return greeting;
            // }
        } else {
            this.char = "_";
            console.log(this.char);
            return this.char;
        }
    };

    this.guessLetter = function() {

        var letterToGuess = process.argv[2];
        //console.log(letterToGuess);

        if (letterToGuess === char) {

            this.guessed = true;
            this.getLetter();

        } else {
            this.guessed = false;
            this.getLetter();
        }

    }

};

module.exports = Letter;

//var example = new Letter('a');
//console.log(example.char);
//example.guessLetter();