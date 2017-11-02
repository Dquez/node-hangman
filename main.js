// The completed game should be able to receive user input using the inquirer or prompt npm packages.

// Feel free to use as many different types of constructor functions as you are able to, but at a minimum, you must create the following constructor functions:




// You must keep track of the user's remaining guesses and prompt the user if they would like to end the game if none remain.





// requiring our Classroom module exported from classroom.js
var Classroom = require("./Classroom.js");

// creating and storing a new classroom object
var firstClass = new Classroom("Ahmed", 3187);

// calling the addStudent method on our firstClass object
firstClass.addStudent("Jacob", "Coding", 3.87);

console.log(firstClass);