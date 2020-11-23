(function(){
    "use strict";

    const lastPush = (username) => fetch('https://api.github.com/users/${username}/events', {headers: {'Authorization': 'token ' + gitHubToken}})
        .then(result => result.json())
        .then(data => data.filter(event => event.type === "PushEvent"))
        .then((data) => {
            console.log(data);
        }).catch(err => {
            console.log(err);
        });


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