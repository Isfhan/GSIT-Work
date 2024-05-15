function myInfo() {
    // function body
    console.log("Hi my name is Isfhan Ahmed");
    console.log("I am from Pakistan");
    console.log("I am a Software engineer");
    console.log("-----------------------------");
}
myInfo();
myInfo();
myInfo();
myInfo();
// Function with required parameters
function myInfoWithParameter(name, country, job) {
    // function body
    console.log("Hi my name is", name); // Argument pass log
    console.log("I am from ".concat(country)); // template string
    console.log("I am a " + job); // concatenation
    console.log("-----------------------------");
}
myInfoWithParameter("Aisha", "Pakistan", "Teacher");
myInfoWithParameter("Areesha", "Pakistan", "Teacher and Programmer");
myInfoWithParameter("Muneeb", "Pakistan", "Programmer");
myInfoWithParameter("Sunny", "Pakistan", "Typescript Programmer");
// Function with Default Parameters
function myInfoWithDefaultParameter(name, country, job) {
    if (job === void 0) { job = "Software Engineer"; }
    // function body    
    console.log("Hi my name is", name); // Argument pass log
    console.log("I am from ".concat(country)); // template string
    console.log("I am a " + job); // concatenation
    console.log("-----------------------------");
}
myInfoWithDefaultParameter("zubaida", "Pakistan");
myInfoWithDefaultParameter("usman", "Pakistan");
myInfoWithDefaultParameter("Aisha", "Pakistan", "Teacher");
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
myInfoWithOptionalParameter("Noor ul huda", "Pakistan");
// Function with Return Type
function myFunctionWithReturnType(n1, n2) {
    // return n1 + n2;
    return n1 + n2;
}
var result = myFunctionWithReturnType(10, 20);
console.log(result);
console.log(myFunctionWithReturnType(50, 20));
// Function that hoisted
logDate();
function logDate() {
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
// Self Invoking Function
(function () {
    // function body
    console.log("Hi I am Isfhan from self invoking function");
})();
// Arrow Function
var myMultiplicationWithArrowFunction = function (num1, num2) { return num1 * num2; };
var result2 = myMultiplicationWithArrowFunction(10, 20);
console.log(result2);
// Before Arrow Function expression
var beforeArrowFunction = function (num1, num2) {
    return num1 - num2;
};
console.log(beforeArrowFunction(123, 23));
// Arrow Function with Rest Parameters
var sumAllNumbers = function (message) {
    var numbers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numbers[_i - 1] = arguments[_i];
    }
    console.log(numbers);
    console.log(typeof numbers);
    console.log(message);
    var total = 0;
    for (var _a = 0, numbers_1 = numbers; _a < numbers_1.length; _a++) {
        var number = numbers_1[_a];
        total += number; // total = total + number
    }
    return total;
};
var result3 = sumAllNumbers("hello i am rest parameters function", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(result3);
