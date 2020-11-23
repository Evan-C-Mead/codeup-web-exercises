(function(){
    "use strict";

    // TODO: Write a function named wait that accepts a number as a parameter,
    //  and returns a promise that resolves after the passed number of milliseconds.

    function wait (seconds) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, seconds)
        });
    }

    // ES6 refactored
    // const wait = seconds => new Promise((resolve) => setTimeout(resolve, seconds));

    wait(1000).then(() => console.log('You\'ll see this after 1 second'));
    wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

})();