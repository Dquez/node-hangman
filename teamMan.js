var inquirer = require("inquirer");

var guesses = 2;
var lettersGuessed = [];
var lettersInChosenWord = [];
var blanksAndSuccesses = [];
var correctGuessed = [];

var numBlanks = 0;
var wordsList = ["Beauty and the Beast", "Star Wars Rogue One", "American Sniper", "The Hunger Games Catching Fire", "The Avengers", "Toy Story 3", "Avatar", "The Dark Knight", "Spider Man 3", "Finding Nemo"];
var chosenWord = "";
chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];
lettersInChosenWord = chosenWord.split("");
numBlanks = lettersInChosenWord.length;
debugger;
var guessWord = function () {
  // if the length of the team array is 3 or higher, no more questions will be asked




  if (guesses > 0) {


    inquirer.prompt([{
      name: "guess",
      message: "Guess a Letter",
      validate: function (value) {

        if (lettersGuessed.indexOf(value) > -1) {
          console.log("\nYou already guessed that letter!");
          return false;
        } else if (value.length > 1) {
          console.log("\nOne letter at a time, or its the noose for you!");
          return false;
        } else if (lettersGuessed.indexOf(value) < 0) {
          return true;
        }

      }
    }]).then(function (answers) {
      // if (answers.guess)

      if (lettersInChosenWord.indexOf(answers.guess) == -1) {
        lettersGuessed.push(answers.guess);
        console.log("This is now in lett guessed array");
        console.log(lettersGuessed);
        guesses--;
        if (guesses == 1) {
          console.log("\nINCORRECT!!! \n" + guesses + " guess remaining! Don't mess this up now...");
          guessWord();
        }
        // else if(guesses == 0) {
        //   inquirer.prompt([{
        //     name: "again",
        //     message: "You're all out of guesses, would you like to play again?",
        //   }]).then(function(answer){
        //     if(answer.again){
        //       // restart game else return
        //     }
        //   })
        // }
        else {
          console.log("\nINCORRECT!!! \n" + guesses + " guesses remaining! C'mon you could do better!");
          guessWord();
        }

      } else {
        for (var i = 0; i < numBlanks; i++) {
          blanksAndSuccesses.push("_");
          // Populate the blanksAndSuccesses with every instance of the letter.
          if (chosenWord[i] === " ") {
            // Here we set the specific space in blanks and letter equal to the letter when there is a match.
            blanksAndSuccesses[i] = " ";
          }
          if (answers.guess == lettersInChosenWord[i]) {
            // var placeHolder = i;
            var correctLetter = lettersInChosenWord[i];
            blanksAndSuccesses[i] = correctLetter;
          }
        }

        console.log(blanksAndSuccesses.join(" "));

        // if (starters.length < 2) {
        //   starters.push(player);
        //   console.log(player.name + " added to the starters");
        // }
        // else {
        //   subs.push(player);
        //   console.log(player.name + " added to the subs");
        // }
        // runs the createPlayer function once more
        // createPlayer();
        guessWord();
      }

    });
  } else {
    // starts first round
    console.log("You did it!");
  }
};


guessWord();
// function to run the game itself. the variable x is used here to keep track of the rounds
// function playGame(roundNumber) {
//   if (roundNumber < 5) {
//     // adds one to roundNumber and prints the current round of the game
//     roundNumber++;
//     console.log("----------\nROUND " + roundNumber + "\n----------");
//     // finds two random numbers between 1 and 20 to compare the starter objects' stats to
//     var offenseRandom = (Math.floor(Math.random() * 20) + 1);
//     var defenseRandom = (Math.floor(Math.random() * 20) + 1);
//     // loops through the starter array to find if the total value of their offense and defense
//     var teamOffense = 0;
//     var teamDefense = 0;
//     for (var i = 0; i < starters.length; i++) {
//       teamOffense += starters[i].offense;
//       teamDefense += starters[i].defense;
//     }
//     console.log("Team Offense: " + teamOffense);
//     console.log("Team defense: " + teamDefense);
//     console.log("Random O: " + offenseRandom);
//     console.log("Random D: " + defenseRandom);
//     // determines if teamOffense is less than offenseRandom and adds one to score if true
//     if (offenseRandom < teamOffense) {
//       console.log("YOU SCORED A POINT!");
//       score++;
//     }
//     // determines if teamDefense is greater than defenseRandom and subtracts one from score if true
//     if (defenseRandom > teamDefense) {
//       console.log("YOU WERE SCORED UPON!");
//       score--;
//     }
//     // prompts to figure out if the player would like to make a substitution
//     inquirer.prompt([
//       {
//         name: "confirm",
//         type: "confirm",
//         message: "Would you like to make a substitution?"
//       }
//     ]).then(function(answer) {
//       // if the answer is yes, start the substitution prompts
//       if (answer.confirm === true) {
//         inquirer.prompt([
//           {
//             name: "sub",
//             type: "rawlist",
//             message: "Who would you like to sub in?",
//             // sets the names of all those contained within the subs array as choices
//             choices: subs
//           }
//         ]).then(function(subIn) {
//           // finds the player object within the subs array with the name that matches
//           // the user's choice and places it within the sideline variable
//           var sideline = {};
//           var number = 0;
//           for (var i = 0; i < subs.length; i++) {
//             if (subs[i].name === subIn.sub) {
//               number = i;
//               sideline = subs[i];
//             }
//           }
//           inquirer.prompt([
//             {
//               name: "sub",
//               type: "rawlist",
//               message: "Who would you like to sub out?",
//               choices: starters
//             }
//           ]).then(function(subOut) {
//             // finds the player object within the starters array with the name that matches the user's choice
//             // and swaps it with the value contained within sideline after moving them into the subs array
//             for (var i = 0; i < starters.length; i++) {
//               if (starters[i].name === subOut.sub) {
//                 subs[number] = starters[i];
//                 starters[i] = sideline;
//                 console.log("SUBSTITUTION MADE!");
//               }
//             }
//             // starts the next round
//             playGame(roundNumber);
//           });
//         });
//       }
//       else {
//         // starts the next round
//         playGame(roundNumber);
//       }
//     });
//   }
//   else {
//     // prints the final score
//     console.log("FINAL SCORE: " + score);
//     // if the score was greater than 0, prints the winning message and increases starters stats
//     if (score > 0) {
//       console.log("Good game, everyone!\nYour current starters' stats have improved!");
//       for (var i = 0; i < starters.length; i++) {
//         starters[i].goodGame();
//       }
//     }
//     // if the score was less than 0, prints the losing message and decreases starters stats
//     if (score < 0) {
//       console.log("That was a poor performance!\nYour current starters' stats have decreased!");
//       for (var i = 0; i < starters.length; i++) {
//         starters[i].badGame();
//       }
//       // if the score was zero, prints the tie message and does nothing to the starters stats
//     }
//     if (score === 0) {
//       console.log("It was a tie game! Not good. Not bad.");
//     }
//     // prompts the user if they would like to play again. if yes, run playgame with a value of 0 being passed into it.
//     // if not, print the "come back again soon message" and exit
//     inquirer.prompt({
//       name: "again",
//       type: "confirm",
//       message: "Would you like to play another match?"
//     }).then(function(answer) {
//       if (answer.again === true) {
//         // starts new match with the same players
//         playGame(0);
//       }
//       else {
//         console.log("Come back again soon!");
//       }
//     });
//   }
// }

// // calls the function createPlayer() to start the code
// createPlayer();