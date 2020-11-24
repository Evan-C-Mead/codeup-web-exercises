(function(){
    "use strict";

    function extractDate (events) {
        for (let event of events) {
            if (event.type === 'PushEvent') {
                return new Date(event.created_at).toDateString();
            }
        }
    }

    function lastPush (username) {
        const url = `https://api.github.com/users/${username}/events`;
        const options = {headers: {'Authorization': 'token ' + gitHubToken}};
        return fetch(url, options)
            .then(res => res.json())
            .then(extractDate)
            .catch(console.error);
    }

    lastPush('Evan-C-Mead').then(console.log);

    // fetch('https://swapi.dev/api/people/1').then((response) => {
        //             return response.json();
        //         })
        //         .then((data) => {
        //             console.log(data.name);
        //             console.log(data.gender);
        //             console.log(data.birth_year);
        //         }).catch(err => {
        //             console.log(err);
        // });

    // TODO: Write a function named wait that accepts a number as a parameter,
    //  and returns a promise that resolves after the passed number of milliseconds.

    // function wait (seconds) {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve();
    //         }, seconds)
    //     });
    // }
    //
    // // ES6 refactored
    // // const wait = seconds => new Promise((resolve) => setTimeout(resolve, seconds));
    //
    // wait(1000).then(() => console.log('You\'ll see this after 1 second'));
    // wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

})();