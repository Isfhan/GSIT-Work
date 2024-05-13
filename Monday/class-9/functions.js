// Basic Syntax of functions
// function functionName(parameter1, parameter2, parameter3) {
//   function Body
// }
function myInfo() {
    // function body
    console.log("Hi my name is Isfhan Ahmed");
    console.log("I am from Pakistan");
    console.log("I am a Software engineer");
    console.log("-----------------------------");
}
myInfo(); // invoke function
myInfo(); // invoke function
myInfo(); // invoke function
// Function with parameters
function myInfoWithParameter(name, country, job) {
    // function body
    console.log("Hi my name is", name); // Argument pass log
    console.log("I am from ".concat(country)); // template string
    console.log("I am a " + job); // concatenation
    console.log("-----------------------------");
}
myInfoWithParameter('Karan kummar', 'India', 'Software Engineer');
myInfoWithParameter('Alishba', 'Pakistan', 'Software Engineer');
// Function with Default Parameters
function myInfoWithDefaultParameter(name, country, job) {
    if (job === void 0) { job = "Software Engineer"; }
    // function body    
    console.log("Hi my name is", name); // Argument pass log
    console.log("I am from ".concat(country)); // template string
    console.log("I am a " + job); // concatenation
    console.log("-----------------------------");
}
myInfoWithDefaultParameter('Ahmed', 'Pakistan', 'Boss');
myInfoWithDefaultParameter('Ahmed', 'Pakistan');
// Function with Optional Parameters
function myInfoWithOptionalParameter(name, country, job) {
    // function body    
    console.log("Hi my name is", name); // Argument pass log
    console.log("I am from ".concat(country)); // template string
    if (job) {
        console.log("I am a " + job); // concatenation
    }
    console.log("-----------------------------");
}
myInfoWithOptionalParameter('Aijaz', 'Pakistan');
// Function with Return Type
function myFunctionWithReturnType(n1, n2) {
    // return n1 + n2;
    return n1 + n2;
}
var result = myFunctionWithReturnType(10, 20);
console.log(result);
// Function that hoisted
logDateTime();
function logDateTime() {
    var date = new Date();
    console.log(date);
}
// function expression
var myInfoWithFunctionExpression = function () {
    // function body
    console.log("Hi my name is Isfhan Ahmed");
    console.log("I am from Pakistan");
};
myInfoWithFunctionExpression();
// Arrow Function
var myMultiplicationWithArrowFunction = function (num1, num2) { return num1 * num2; };
var result2 = myMultiplicationWithArrowFunction(10, 20);
console.log(result2);
// Arrow Function with multiple parameters
var myInfoWithArrowFunction = function (name, country, job) {
    // function body
    console.log("Hi my name is", name); // Argument pass log
    console.log("I am from ".concat(country)); // template string
    console.log("I am a " + job); // concatenation
};
// Arrow Function with Rest Parameters
var sumAllNumbers = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    console.log(numbers);
    console.log(typeof numbers);
    var total = 0;
    for (var _a = 0, numbers_1 = numbers; _a < numbers_1.length; _a++) {
        var number = numbers_1[_a];
        total += number;
    }
    return total;
};
var result3 = sumAllNumbers(10, 20, 30, 40, 50, 100, 400);
console.log(result3);
