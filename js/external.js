"use strict";

console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

let userColor = prompt('Please enter your favorite color: ');
console.log('User said ' + userColor + ' is their favorite color.');

alert('Great, ' + userColor + ' is my favorite color too!');

alert('All movies are $3 per day');
var rentLittleMermaid = prompt('How many days do you want to rent "The Little Mermaid"?');
alert('You are renting "The Little Mermaid" for ' + rentLittleMermaid + ' days.');
var rentBrotherBear = prompt('How many days do you want to rent "Brother Bear"?');
alert('You are renting "Brother Bear" for ' + rentBrotherBear + ' days.');
var rentHercules = prompt('How many days do you want to rent "Hercules"?');
alert('You are renting "Hercules" for ' + rentHercules + ' days.');
var pricePerMovie = 3;
var totalRentalPrice = (rentLittleMermaid * pricePerMovie) + (rentBrotherBear * pricePerMovie) + (rentHercules * pricePerMovie);
alert('Your total price for renting is: $' + totalRentalPrice);

var daysWorkedAmazon = prompt('How many days did you work at Amazon this week?');
alert('You worked ' + daysWorkedAmazon + ' days at Amazon this week.');
var amazonPay = prompt('How much do you get paid per hour at Amazon?');
alert('You get paid ' + amazonPay + ' per hour at Amazon.')
var amazonTotal = daysWorkedAmazon * amazonPay;
alert('Your total from Amazon this week is ' + amazonTotal);
var daysWorkedFacebook = prompt('How many days did you work at Facebook this week?');
alert('You worked ' + daysWorkedFacebook + ' days at Facebook this week.');
var facebookPay = prompt('How much do you get paid per hour at Facebook?');
alert('You get paid ' + facebookPay + ' per hour at Facebook.')
var facebookTotal = daysWorkedFacebook* facebookPayPay;
alert('Your total from Facebook this week is ' + facebookTotal);
var daysWorkedGoogle = prompt('How many days did you work at Google this week?');
alert('You worked ' + daysWorkedGoogle + ' days at Google this week.');
var googlePay = prompt('How much do you get paid per hour at Google?');
alert('You get paid ' + googlePay + ' per hour at Google.')
var googleTotal = daysWorkedGoogle * googlePay;
alert('Your total from Amazon this week is ' + googleTotal);
var totalWeeklyPay = amazonTotal + facebookTotal + googleTotal;
alert('Your total weekly pay is ' + totalWeeklyPay + ' .');

alert('You can only join this class if it is not full and you have space in your schedule for it.');
