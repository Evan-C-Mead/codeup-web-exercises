(function() {
    "use strict";

    let inputString = "Trick or Treat";
    let inputArray = inputString.split(' ');
    inputArray.forEach(function (element, index) {
        console.log("[" + index + "] " + element)
    });
    console.log(inputArray)

    // ***** Math Methods ***** //

    // ** DONT DO THIS ==> var mathComputations = new Math(); <== DONT DO THIS ** //

    // ==> Math.random()
    let randomNum = Math.random() * 2;
    console.log(randomNum);

    // ==> Math.round()
    // Can't use decimal when referring to an array index, so we round it to the nearest integer
    console.log(Math.round(randomNum))

    let index = Math.round(randomNum);
    console.log("Normal rounding: " + index);

    // ==> Math.floor()
    index = Math.floor(randomNum);
    console.log("Rounding down: " + index);

    let randomWord = inputArray[index];
    console.log(randomWord);

    // ==> Math.ceil()
    index = Math.ceil(randomNum);
    console.log("Rounding up: " + index);
    randomWord = inputArray[index];
    console.log(randomWord);

    // New situation by adding a constant to random number
    // random number between 74 and 186...

    let numBetween = Math.ceil(Math.random() * 74) + 112;
    console.log("Using 74 as random base, and adding 112: " + numBetween)
    numBetween = Math.floor(Math.random() * 112) + 74;
    console.log("Using 112 as random base, and adding 74: " + numBetween);

    // Want a number between (decimal) 0.0000 to  0.8000
    let randomDecimal = Math.random() * 0.8;
    console.log("random decimal is: " + randomDecimal.toFixed(2));

})();