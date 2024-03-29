(function (){
    "use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(color) {
    if(color === "blue") {
        return "Blue is the color of the sky.";
    } else if(color === "red") {
        return "Strawberries are red.";
    } else if(color === "cyan") {
        return "I don't know anything about cyan."
    } else {
        return "Not a color I recognize."
    }
}

console.log(analyzeColor("blue"));
console.log(analyzeColor("red"));
console.log(analyzeColor("cyan"));
console.log(analyzeColor("pink"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

var color = prompt("Enter a color.");

switch (color) {
    case "blue":
        alert("Blue is the color of the sky.");
        break;
    case "red":
        alert("Red is the color of Strawberries.");
        break;
    case "cyan":
        alert("I don't know anything about cyan.");
        break;
    default:
        alert("Not a color I recognize.");
        break
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var userColor = prompt("Enter a color.");
alert("You picked the color " + userColor + ". " + analyzeColor(userColor));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTool (luckyNumber, totalAmount) {
    if(luckyNumber === 0 && totalAmount === 100){
        return 100;
    } else if(luckyNumber === 1 && totalAmount === 100) {
        return 90;
    } else if(luckyNumber === 2 && totalAmount === 100) {
        return 75;
    } else if(luckyNumber === 3 && totalAmount === 100) {
        return 65;
    } else if(luckyNumber === 4 && totalAmount === 100) {
        return 50;
    } else if(luckyNumber === 5 && totalAmount === 100) {
        return 0;
    } else {
        return "not a valid lucky number..."
    }
}

console.log(calculateTool(0,100));
console.log(calculateTool(1,100));
console.log(calculateTool(2,100));
console.log(calculateTool(3,100));
console.log(calculateTool(4,100));
console.log(calculateTool(5,100));
console.log(calculateTool(8,100));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6

// function calculateTool (luckyNumber, totalAmount) {
//     if(luckyNumber === 0 && totalAmount === userInput){
//         return 100;
//     } else if(luckyNumber === 1 && totalAmount === userInput) {
//         return 90;
//     } else if(luckyNumber === 2 && totalAmount === userInput) {
//         return 75;
//     } else if(luckyNumber === 3 && totalAmount === userInput) {
//         return 65;
//     } else if(luckyNumber === 4 && totalAmount === userInput) {
//         return 50;
//     } else if(luckyNumber === 5 && totalAmount === userInput) {
//         return 0;
//     } else {
//         return "not a valid lucky number..."
//     }
// }
//
// var luckyNumber = Math.floor(Math.random() * 6);
// var userInput = prompt("Enter your total bill: ");
// alert("Your lucky number was " + luckyNumber + "." + " Your price before discount was " + userInput + "." + " Your price after the lucky number discount is " + calculateTool(luckyNumber, userInput));

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

var userConfirm = confirm("Would you like to enter a number?");
if(userConfirm === true) {
    var userNumber = Number.parseFloat(prompt("Enter your number: "));
    alert(userNumber + 100);
    alert(Math.sign(userNumber));
    if(userNumber % 2 === 0){
        return alert("Your number is even.");
    } else {
        return alert("Your number is odd.");
    }
}
})();