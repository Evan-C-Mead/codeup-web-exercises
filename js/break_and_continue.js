(function (){
    "use strict";

    var input;
    while (input % 2 !== 1) {
        input = parseFloat(prompt("Enter a number between 1 and 50."))
    }

    for (var i = 1; i <= 50; i++) {
        if (input == i) {
            console.log("Yikes! Skipping number: " + i);
        } else {
            if (i % 2 === 0) {
                continue;
            } else {
                console.log("Here is an odd number: " + i);
            }
        }
    }

})();