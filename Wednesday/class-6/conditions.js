// simple if else example
var classDay = 'Wednesday';
if (classDay === 'Wednesday') {
    console.log('Go to class');
}
else {
    console.log('Do nothing sleep and have a nice day');
}
// create variables
var homeFood = 'DaalChawal';
var moneyIHave = 100; // change this value to 300 for biryani or 350 or higher for zinger
var zingerPrice = 350;
// this is an example of if else if else condition
if (homeFood === 'DaalChawal' && moneyIHave === 300) { // this code will execute if both conditions are true
    console.log('Go out and buy biryani');
}
else if (moneyIHave >= zingerPrice) { // this code will execute if  above condition is false
    console.log('Buy zinger');
}
else { // this code will execute if both conditions are false
    console.log('Eat DaalChawal');
}
// switch example
var weekDayNumber = 5;
switch (weekDayNumber) {
    case 1:
        console.log('Monday'); // this code will execute if weekDayNumber is 1
        break;
    case 2:
        console.log('Tuesday'); // this code will execute if weekDayNumber is 2
        break;
    case 3:
        console.log('Wednesday'); // this code will execute if weekDayNumber is 3
        break;
    case 4:
        console.log('Thursday'); // this code will execute if weekDayNumber is 4
        break;
    case 5:
        console.log('Friday'); // this code will execute if weekDayNumber is 5
        break;
    case 6:
        console.log('Saturday'); // this code will execute if weekDayNumber is 6
        break;
    case 7:
        console.log('Sunday'); //  this code will execute if weekDayNumber is 7
        break;
    default:
        console.log('Invalid day'); // this code will execute if weekDayNumber is not between 1 to 7
        break;
}
// switch example with string
var foodItem = 'Pizza';
switch (foodItem) {
    case 'Biryani':
        console.log('I love beef biryani'); // this code will execute if foodItem is Biryani
        break;
    case 'Pizza':
        console.log("I don't like Pizza"); // this code will execute if foodItem is Pizza
        break;
    case 'DaalChawal':
        console.log('I love DaalChawal'); // this code will execute if foodItem is DaalChawal
        break;
    case 'Zinger':
        console.log('I love zinger'); // this code will execute if foodItem is Zinger
        break;
}
// Example of logical operators
var isMyBirthDay = true;
var amIHappy = false;
// logical and
if (isMyBirthDay && amIHappy) {
    console.log('Happy Birthday');
}
// logical or
if (isMyBirthDay || amIHappy) {
    console.log('Happy Birthday but i am not happy');
}
