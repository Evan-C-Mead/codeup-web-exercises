(function (){
    "use strict";

console.log("Welcome to Intro to Objects!");

/*********************************************
 *              INTRO TO OBJECTS
 ******************************************** */

/**
 * Objects are an unordered collection of related data in the form of
 * key:value pairs
 */

// var rubberDuck = {
//     color: "yellow",
//     role: "emotional support",
//     name: "Dude"
// };
//     console.log(rubberDuck);

/*********************************************
 *              CREATING NEW OBJECTS
 ******************************************** */

/**
 * Objects can be created in JavaScript through the use of the 'new
 * Object()' constructor, or Object literal notation using curly braces.
 */

/**
 * TODO TOGETHER: Create a new variable (of type Object) and call it 'myPhone'. Use either the constructor or Object literal notation.
 */

// var myPhone = {
//     color: "red, with wood and blue resin case",
//     model: "iPhone 8",
//     storage: "256 GB",
//     role: "personal communication",
//     name: "Evan's iPhone",
//     ring: function() {
//         console.log("RING! RING!");
//     },
//     picture: function() {
//         console.log("Press button to take a picture!")
//     }
// };
//     console.log(myPhone);
//     console.log(myPhone.model);
//     console.log(myPhone.color);
//     myPhone.ring();
//     myPhone.picture();


/**
 * TODO: Create a new Object and call it 'myMac'. use either the constructor or Object literal notation.
 */

// var myMac = {
//     color: "silver",
//     size: "13 in.",
//     storage: "128 GB",
//     role: "Codeup!"
// };
//     console.log(myMac);

/*********************************************
 *              PROPERTIES
 ******************************************** */

/**
 * TODO TOGETHER: Using dot notation, assign these properties to your phone
 * Object: 'model', 'color', 'storage'. Console log your phone variable to
 * check that the information was stored properly.
 */

// var myPhone = new Object();
// myPhone.model = "iPhone 8";
// myPhone.color = "red";
// myPhone.storage = "258 GB";
//     console.log(myPhone);

/**
 * TODO: Using dot notation, assign these properties to your Mac
 * Object: 'model', 'size', 'year', Console log the Object to check if the
 * information was stored properly
 */

// var myMac = new Object();
//     myMac.model = "MacBook Pro"
//     myMac.size = "13 in.";
//     myMac.year = "2015";
//
//     console.log(myMac);

/**
 * TODO TOGETHER: Assign a 'name' property to your phone. This should be of
 * type Object and store properties for the user's 'firstName' and
 * 'lastName'. Use console log to access the user's 'lastName'
 */

// myPhone.name = {
//     firstName: "Evan",
//     lastName: "Mead"
// }
//     console.log(myPhone);
//     console.log(myPhone.name.firstName);
//
//     myPhone.apps = ["Slack", "YouTube", "Snapchat"]
//     console.log(myPhone.apps[1]);
//
//     myPhone.apps.forEach(function (app) {
//         console.log(app);
//     });

/**
 * TODO: Using dot notation, assign a property called 'folders' that stores
 * an Array representing different folders in your system.
 */

// myMac.folders = ["Work", "School", "Games", "Pictures"]
//     console.log(myMac);
//
// myMac.folders.forEach(function (folder) {
//     console.log(folder);
// });

/**
 * TODO: Assign a 'login' property. This should be an object that stores
 * 'username','fakePassword' and 'email'
 */

// myMac.login = {
//     username: "user",
//     fakepassword: "fakepassword",
//     email: "user@email.com"
// }
//     console.log(myMac);
//     console.log(myMac.login);

/*********************************************
 *                  METHODS
 ******************************************** */

/**
 * TODO TOGETHER: We are going to add functionality to our phone Object.
 * Using the dot notation, add a method named 'call' that console logs the
 * message: "Dialing..."
 */

// myPhone.call = function () {
//     console.log("Dialing");
// };
// myPhone.call();

/**
 * TODO: Let's add functionality to our Mac Object. Create a method named
 * 'powerOn'. When called, this should display a console message that says
 * "Powering on..."
 */

// myMac.powerOn = function () {
//     console.log("Powering on")
// };
// myMac.powerOn();

/**
 * TODO TOGETHER: Let's add one more piece of functionality. Create a
 * method on the phone object that returns a message displaying the user's
 * firstName and lastName. Hint: use the 'this' keyword.
 */

// myPhone.currentUser = function () {
//     console.log("Current user: " + this.name.firstName + " " + this.name.lastName)
// };
// myPhone.currentUser();

/**
 * TODO: One last thing. Let's add a 'currentUser' method that displays the
 * Mac user's 'username' and 'email'. Use the 'this' keyword to reference
 * the properties we created earlier.
 */

// myMac.currentUser = function () {
//     console.log("Current username: " + this.login.username + ". User email is: " + this.login.email)
// };
// myMac.currentUser();

/*********************************************
 *                  NESTED VALUES
 ******************************************** */

/**
 * Because an Object is a collection of data and functionality, very often
 * we will see nested values. This can mean an Array of Objects containing
 * Arrays, Objects containing other Objects and so on.
 *
 * It is important to understand the shape of our data so that we can
 * navigate through it.
 */


/*********************************************
 *                  ARRAYS OF OBJECTS
 ******************************************** */

/**
 * If we have an Array of Objects, we can iterate through it to access each
 * Object element and pull the properties and methods that we need.
 */

var chooseYourFighter = [
    {
        name: {
            firstName: "Spongebob",
            lastName: "Squarepants"
        },
        catchPhrase: function () {
            return "Spongebob!!!"
        },
        abilities: ["Karate", "Bubble Blowing"]
    },
    {
        name: {
            firstName: "Patrick",
            lastName: "Star"
        },
        catchPhrase: function () {
            return "No, this is Patrick!"
        },
        abilities: ["Rock Hiding", "Best Friend"]
    },
    {
        name: {
            firstName: "Eugene",
            lastName: "Krab"
        },
        catchPhrase: function () {
            return "MONEY!!!"
        },
        abilities: ["Count Money", "Play Violin"]
    },
    {
        name: {
            firstName: "Squidward",
            lastName: "tentacles"
        },
        catchPhrase: function () {
            return "Annoying noise..."
        },
        abilities: ["Be Annoying", "Nagging"]
    }

    ];
chooseYourFighter.forEach(function (fighter) {
    console.log(fighter.name.firstName + ": " + fighter.catchPhrase());
    console.log("Abilities: ");

    fighter.abilities.forEach(function (ability) {
        console.log(ability)
    });
    console.log("----------")
});

})();