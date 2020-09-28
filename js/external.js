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

var hoursWorkedAmazon = prompt('How many hours did you work at Amazon this week?');
alert('You worked ' + hoursWorkedAmazon + ' hours at Amazon this week.');
var amazonPay = prompt('How much do you get paid per hour at Amazon?');
alert('You get paid ' + amazonPay + ' per hour at Amazon.')
var amazonTotal = hoursWorkedAmazon * amazonPay;
alert('Your total from Amazon this week is ' + amazonTotal);
var hoursWorkedFacebook = prompt('How many hours did you work at Facebook this week?');
alert('You worked ' + hoursWorkedFacebook + ' hours at Facebook this week.');
var facebookPay = prompt('How much do you get paid per hour at Facebook?');
alert('You get paid ' + facebookPay + ' per hour at Facebook.')
var facebookTotal = hoursWorkedFacebook* facebookPay;
alert('Your total from Facebook this week is ' + facebookTotal);
var hoursWorkedGoogle = prompt('How many hours did you work at Google this week?');
alert('You worked ' + hoursWorkedGoogle + ' hours at Google this week.');
var googlePay = prompt('How much do you get paid per hour at Google?');
alert('You get paid ' + googlePay + ' per hour at Google.')
var googleTotal = hoursWorkedGoogle * googlePay;
alert('Your total from Amazon this week is ' + googleTotal);
var totalWeeklyPay = amazonTotal + facebookTotal + googleTotal;
alert('Your total weekly pay is ' + totalWeeklyPay + ' .');

alert('You can only join this class if it is not full and you have space in your schedule for it.');
var classConfirm = confirm('Is this class available?');
console.log(classConfirm);
alert('User class is available: ' + classConfirm);
var studentAvailability = confirm('Do you have an opening in your schedule?');
console.log(studentAvailability);
alert('User has opening in schedule for class: ' + studentAvailability);
function studentEnrolled() {
    if(classConfirm && studentAvailability === true){
        return true;
    } else{
        return false;
    }
}
alert('User is enrolled in class: ' + studentEnrolled());

