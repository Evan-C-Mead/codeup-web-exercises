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

    // Want between 2k and 3k
    // let randSelection = Math.random()* 2000 + 1000;

    // ***** ==> THIS IS HOW YOU DEFINE A RANGE BETWEEN NUMBERS <== ***** //
    // let chosenNum = 2000 + Math.random()*(3000 - 2000);

    // TODO: WRITE A METHOD TO FIND A RANDOM NUMBER BETWEEN A RANGE OF TWO NUMBERS
    // * HINT: The min and max should be passed into the method as parameters *
    let randomNumber = 35 + Math.random()*(276 - 35);
    console.log("NEW RANDOM NUMBER IS: " + randomNumber.toFixed(0));

    function randNumbs(min, max) {
        var range = Math.random() * (max - min) + min;
        return range.toFixed(0);
    }

    console.log("OTHER RANDOM NUMBER: " + randNumbs(478, 786));

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

    // ==> Math pow()
    // Raise one number to power of another number
    let exponentResult = Math.pow(4, 2);
    console.log("4 squared (4^2): " + exponentResult);
    console.log("8 cubed (8^3): " + Math.pow(8, 3));

    // Way to find with loop
    let base = 8;
    let exponent = 6;
    let result = base;
    for (let i = 1; i < exponent; i++) {
        // 8, 8*8=64, 8*8*8=64*8
        result = result * base; // when i=0, result  = 8 * 8(base)
                                // when i=1, result = 64 * 8(base)
                                // when i=2, result = 512 * 8(base)
    }
    console.log(base + " to the " + exponent + " power: " + result);

    // ==> Math.sqrt()
    console.log("The square root of 16: " + Math.sqrt(16));
    console.log("The square root of 64: " + Math.sqrt(64));


    // ***** Math Constants ***** //

    // ==> Math.PI
    // π is used to calculate circumference and area of a circle
    // Circumference = 2 * π * r = π * D(diameter)°
    // alt + p = π
    // alt + shift + 8 = °
    let circumferernce = Math.PI * 5;
    console.log("Circumference of a circle with diameter of 5: " + circumferernce.toFixed(3));
    let area = Math.PI * Math.pow(2.5, 2);
    console.log("Area of a circle with diameter of 5: " + area.toFixed(3));

    // ==> Math.E
    console.log("Euler's constant: " + Math.E)

    //Scientific notation
    // 4.58 * e^9
    console.log("Number represented by 4.58 * e^9: " + (4.58 * Math.pow(Math.E, 9)).toFixed(2));

})();