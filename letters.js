// constructor function for creating student objects
var Letter = function(letter, space) {
    this.letter = letter;
    this.space = space;
  };
  
  // exporting our Student constructor
  module.exports = Letter;


  // Letter: Used for each letter in the current word. Each letter object should either display an underlying character, or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. This should contain letter specific logic and data.

  // Look into function prototypes and use them for a few of your constructor's methods.