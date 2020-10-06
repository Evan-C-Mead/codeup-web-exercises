"use strict";

console.log("Hello Brance");

console.log("Hello Jordy");

console.log("Hello Ryan (both)");

console.log("Hello Vivian");

console.log("Hello Will");

function sayHello(name){
    console.log("Hello " + name);
}

sayHello("Evan");

sayHello("Connor");

sayHello("Rod");

function words(str) {
    return str === str.toUpperCase() || str === str.toLowerCase();
}

console.log(words("hello, hello"));
console.log(words("Hello, hello"));
console.log(words("HELLO, HELLO"));