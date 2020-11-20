(function (){
    "use strict";

    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
            yearsOfExperience: 5
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
            yearsOfExperience: 6
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
            yearsOfExperience: 7
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
            yearsOfExperience: 8
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
            yearsOfExperience: 9
        }
    ];

    let userObjects = users.filter(user => user.languages.length >= 3);
    console.log(userObjects);

    let userEmails = users.map(user => user.email);
    console.log(userEmails);

    let userExperience = users.reduce((yearsExperience, user) => {return yearsExperience + user.yearsOfExperience}, 0);
    console.log(userExperience);
    console.log(userExperience / users.length);

    let longestEmail = userEmails.reduce((longestEmail, currentEmail) => {
        if(currentEmail.length > longestEmail.length) return currentEmail;
        return longestEmail;
    }, '');
    console.log(longestEmail);

    let nameString = users.reduce((currentString, word) => {
        return `${currentString} ${word.name}, `.toUpperCase();
    }, 'Your instructors are: ');
    console.log(nameString);

})();