var inquirer = require("inquirer");
var Letter = require("./letters");
var lettersGuessed = [];
var lettersInChosenWord = [];
var blanksAndSuccesses = [];
var numBlanks = 0;
var wordsList = ["beauty and the beast", "star wars rogue one", "american sniper", "the hunger games catching fire", "the avengers", "toy story 3", "avatar", "the dark knight", "spider man 3", "finding nemo"];
var chosenWord = "";


function chooseWord() {
  chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];
}
chooseWord();

lettersInChosenWord = chosenWord.split("");
numBlanks = lettersInChosenWord.length;

var displaySpaces = function () {
  for (var i = 0; i < numBlanks; i++) {
    blanksAndSuccesses.push("_");
    // Populate the blanksAndSuccesses with every instance of the letter.
    if (chosenWord[i] === " ") {
      // Here we set the specific space in blanks and letter equal to the letter when there is a match.
      blanksAndSuccesses[i] = " ";
    }
  }
  console.log(blanksAndSuccesses.join(" "));
}
displaySpaces();
var createWord = function (guesses) {
  chooseWord();
  if (guesses > 0) {
    // debugger;
    var letterConstructor = new Letter;
    letterConstructor.newLetter();
    debugger;
    // newLetter.newLetter(guesses);
    // inquirer.prompt([{
    //   name: "guess",
    //   message: "Guess a Letter",
    //   validate: function (value) {
    //     if (lettersGuessed.indexOf(value) > -1) {
    //       console.log("\nYou already guessed that letter!");
    //       return false;
    //     } else if (value.length > 1) {
    //       console.log("\nOne letter at a time, or its the noose for you!");
    //       return false;
    //     } else if (blanksAndSuccesses.indexOf(value) > -1) {
    //       console.log("\nYou already guessed that letter!");
    //       return false;
    //     } else if (lettersGuessed.indexOf(value) < 0) {
    //       return true;
    //     }
    //   }
    // }]).then(function (answers) {
    //   if (lettersInChosenWord.indexOf(answers.guess) == -1) {
    //     lettersGuessed.push(answers.guess);

    //     console.log("This is now in letters guessed array");
    //     console.log(lettersGuessed);
    //     guesses--;
    //     if (guesses == 1) {
    //       console.log("\nINCORRECT!!! \n" + guesses + " guess remaining! Don't mess this up now...");
    //       console.log(blanksAndSuccesses.join(" "));
    //       createWord(guesses);
    //     } else {
    //       console.log("\nINCORRECT!!! \n" + guesses + " guesses remaining! C'mon you could do better!");
    //       console.log(blanksAndSuccesses.join(" "));
    //       createWord(guesses);
    //     }
    //     debugger;
    //   } else {
    //     for (var i = 0; i < numBlanks; i++) {
    //       if (answers.guess == lettersInChosenWord[i]) {
    //         var correctLetter = lettersInChosenWord[i];
    //         blanksAndSuccesses[i] = correctLetter;
    //       }
    //     }
    //     console.log(blanksAndSuccesses.join(" "));
    //     if (blanksAndSuccesses.indexOf("_") == -1) {
    //       correct();
    //     } else {
    //       createWord(guesses);
    //     }
    //   }
    // });
  } else {
    console.log("The answer is: " + lettersInChosenWord.join(""));
    inquirer.prompt([{
      type: "confirm",
      name: "again",
      message: "You're all out of guesses, would you like to play again?",
    }]).then(function (answer) {
      if (answer.again) {
        replay();
      } else {
        console.log("Come back soon!");
        return;
      }
    });
  }
};
createWord(3);

function correct() {
  console.log("Horray! You got it right! Let's see if that was luck though..");
  inquirer.prompt([{
    type: "confirm",
    name: "again",
    message: "Would you like to play again?",
  }]).then(function (answer) {
    if (answer.again) {
      console.log("Good luck!");
      replay();
    } else {
      console.log("Come back soon!");
      return;
    }
  });
}

function replay() {
  lettersGuessed = [];
  lettersInChosenWord = [];
  blanksAndSuccesses = [];
  correctGuessed = [];
  chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];
  lettersInChosenWord = chosenWord.split("");
  numBlanks = lettersInChosenWord.length;
  displaySpaces();
  createWord(3);
}
module.exports = createWord;



// PSUEDOCODE
// I wanted to export the methong newLetter from my letter.js which would have access to all the global variables of this file and behave the same way it would as if it were nested in this files "createWord" function. 
// When the user's word is correctly (after being validated) entered, it checks if the user entered a letter that is present in the lettersInChosenWord.
// If it is present, the letter's (state) would be changed from space (false) to letter guessed (true)
// if false, push to incorrect letters array, decrement guesses and run the createWord again with new guess parameter
// else letter (true) is pushed to the blanksAndSuccesses array at the appropriate spot. createWord is rerun with the same guess parameter.
// once the game is done, the user is asked if they'd like to play again. if yes, then rerun createWord else return