(function (){
    "use strict";

    function showMultiplicationTable(x) {
        for (var i = 1; i <= 10; i++) {
            console.log(x + " x " + i + " = " + (x * i));
        }
    }
    showMultiplicationTable(7)


    // for (var i = 20; i <= 200; i ++) {
    //     var randomNumber= Math.floor((Math.random() * (200 - 20 + 1)) + 20);
    //     if (randomNumber === i && i % 2 === 0) {
    //         console.log(randomNumber + " is even.");
    //     } else {
    //         console.log(randomNumber + " is odd.")
    //     }
    // }


    // var i;
    // var j;
    // for(i=1; i<=9; i++)
    // {
    //     for(j=1; j<=i; j++) {
    //         console.log(i);
    //     }
    // }


    // for (var i = 5; i <= 100; i++) {
    //     if (i % 5 === 0) {
    //         console.log(i);
    //     }
    // }


})();