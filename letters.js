// // constructor function for creating student objects
// var inquirer = require("inquirer");
// var Letter = function(letter) {
//     // this.space = space;
//     // this.letter = newLetter();

//     this.newLetter = function () {
//     inquirer.prompt([{
//         name: "guess",
//         message: "Guess a Letter",
//         validate: function (value) {
//           if (lettersGuessed.indexOf(value) > -1) {
//             console.log("\nYou already guessed that letter!");
//             return false;
//           } else if (value.length > 1) {
//             console.log("\nOne letter at a time, or its the noose for you!");
//             return false;
//           } else if (Word.blanksAndSuccesses.indexOf(value) > -1) {
//             console.log("\nYou already guessed that letter!");
//             return false;
//           } else if (Word.lettersGuessed.indexOf(value) < 0) {
//             return true;
//           }
//         }
//       }]).then(function (answers) {
//         if (lettersInChosenWord.indexOf(answers.guess) == -1) {
//           lettersGuessed.push(answers.guess);
  
//           console.log("This is now in letters guessed array");
//           console.log(lettersGuessed);
//           guesses--;
//           if (guesses == 1) {
//             console.log("\nINCORRECT!!! \n" + guesses + " guess remaining! Don't mess this up now...");
//             console.log(blanksAndSuccesses.join(" "));
//             createWord(guesses);
//           } else {
//             console.log("\nINCORRECT!!! \n" + guesses + " guesses remaining! C'mon you could do better!");
//             console.log(blanksAndSuccesses.join(" "));
//             createWord(guesses);
//           }
//           debugger;
//         } else {
//           for (var i = 0; i < numBlanks; i++) {
//             if (answers.guess == lettersInChosenWord[i]) {
//               var correctLetter = lettersInChosenWord[i];
//               blanksAndSuccesses[i] = correctLetter;
//             }
//           }
//           console.log(blanksAndSuccesses.join(" "));
//           if (blanksAndSuccesses.indexOf("_") == -1) {
//             correct();
//           } else {
//             createWord(guesses);
//           }
//         }
//       });
//   } 
//   };
  


  
//   // exporting our Student constructor
//   module.exports = Letter;


  // Letter: Used for each letter in the current word. Each letter object should either display an underlying character, or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. This should contain letter specific logic and data.

  // Look into function prototypes and use them for a few of your constructor's methods.