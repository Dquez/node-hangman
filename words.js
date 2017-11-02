// requiring our Student module exported from student.js
var Letter = require("./letters");

// constructor function for creating classroom objects
var Word = function (word, spaces, guesses) {
    // this.students will hold all of our student objects
    var winCounter = 0;
    var lossCounter = 0;
    guesses = 10;
    // this.spaces = word.length;
    this.lettersGuessed = [];
    // this.word = word.split();
    var correctGuessed = [];
    var wordsList = ["Beauty and the Beast", "Star Wars Rogue One", "American Sniper", "The Hunger Games Catching Fire", "The Avengers", "Toy Story 3", "Avatar", "The Dark Knight", "Spider-Man 3", "Finding Nemo"];
    // Solution will be held here.
    var chosenWord = "";
    // This will break the solution into individual letters to be stored in array.
    var lettersInChosenWord = [];
    // This will be the number of blanks we show based on the solution
    var numBlanks = 0;
    // Holds a mix of blank and solved letters (ex: 'n, _ _, n, _').
    var blanksAndSuccesses = [];
    // Holds all of the wrong guesses
    var wrongGuesses = [];

    this.startGame = function () {
        // Reset the guesses back to 0.


        // Solution is chosen randomly from wordList.
        chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];
        // The word is broken into individual letters.
        lettersInChosenWord = chosenWord.split("");
        // We count the number of letters in the word.
        numBlanks = lettersInChosenWord.length;

        // We print the solution in console (for testing).
        console.log(chosenWord);
        // CRITICAL LINE - Here we *reset* the guess and success array at each round.
        blanksAndSuccesses = [];
        // CRITICAL LINE - Here we *reset* the wrong guesses from the previous round.
        wrongGuesses = [];
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

    // It then pushes the new student object to this.students and updates this.numStudents
    this.addStudent = function (x, y, z) {
        this.students.push(new Student(x, y, z));
    };
    // this method will tell you how many students are in the class
    this.studentCount = function () {
        return this.students.length;
    };
    this.guesses = guesses;
};

// exporting our Classroom constructor. We will require it in main.js
module.exports = Word;
// Array of Word Options (all lowercase)
var first = new Word();
first.startGame();


function checkLetters(letter) {

    var letterInWord = false;

    // Check if a letter exists inside the array at all.
    for (var i = 0; i < numBlanks; i++) {
        if (chosenWord[i] === letter) {
            // If the letter exists then toggle this boolean to true. This will be used in the next step.
            letterInWord = true;
        }
    }

    // If the letter exists somewhere in the word, then figure out exactly where (which indices).
    if (letterInWord) {

        // Loop through the word.
        for (var j = 0; j < numBlanks; j++) {

            // Populate the blanksAndSuccesses with every instance of the letter.
            if (chosenWord[j] === letter) {
                // Here we set the specific space in blanks and letter equal to the letter when there is a match.
                blanksAndSuccesses[j] = letter;
            }
        }
        // Logging for testing.
        console.log(blanksAndSuccesses);
    }
    // If the letter doesn't exist at all...
    else {
        // ..then we add the letter to the list of wrong letters, and we subtract one of the guesses.
        wrongGuesses.push(letter);
        numGuesses--;
    }
}

// roundComplete() function
// Here we will have all of the code that needs to be run after each guess is made
function roundComplete() {

    // First, log an initial status update in the console telling us how many wins, losses, and guesses are left.
    console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);

    // Update the HTML to reflect the new number of guesses. Also update the correct guesses.
    document.getElementById("guesses-left").innerHTML = numGuesses;
    // This will print the array of guesses and blanks onto the page.
    document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
    // This will print the wrong guesses onto the page.
    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

    // If we have gotten all the letters to match the solution...
    if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {
        // ..add to the win counter & give the user an alert.
        winCounter++;
        alert("You win!");

        // Update the win counter in the HTML & restart the game.
        document.getElementById("win-counter").innerHTML = winCounter;
        startGame();
    }

    // If we've run out of guesses..
    else if (numGuesses === 0) {
        // Add to the loss counter.
        lossCounter++;
        // Give the user an alert.
        alert("You lose");

        // Update the loss counter in the HTML.
        document.getElementById("loss-counter").innerHTML = lossCounter;
        // Restart the game.
        startGame();
    }

}

// MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
// ==================================================================================================

// Starts the Game by running the startGame() function
// startGame();

// Then initiate the function for capturing key clicks.
// document.onkeyup = function (event) {
//     // Converts all key clicks to lowercase letters.
//     var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
//     // Runs the code to check for correctness.
//     checkLetters(letterGuessed);
//     // Runs the code after each round is done.
//     roundComplete();
// };



// BASE CASE 
// if num guesses = 0
// Game over, would you like to play again?
// run generate word func


// User will be shown spaces equal to letters.length 
// Guess a letter?

// branch two (If user guesses the right letter(word array.indexOf guessedLetter >-1) calling the letter constructor, iterate through the spaces array and find all the letters that have the letter guessed) 
// Then replace the _ (madLibs replace) with the letter, (Make sure the word still has the same length)


// Make a variable equal to the i while iterating through word array. This variable will be used to get the index of the _ in the spaces array


// If correct Guessed array is equal to this.word array, Win game
// Display Correct!! Then immediately call the function to ask for a letter
// Each correct guessed letter will go into a correct Guessed array
// If correct word, display You got it right! Here's the next work. run func of generateWord again

// branch three (If user guesses incorrectly, word array.indexOf guessedLetter == -1) 
// Incorrect!! 
// -- num guesses remaining 
// restart branch one 
// spaces[num] = letter guessed