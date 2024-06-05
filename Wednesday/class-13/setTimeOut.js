"use strict";
// Understanding setTimeout and Web APIs
// Web APIs is a set of APIs that are provided by the browser to JavaScript.
// setTimeout is a function that is used to schedule a function to be executed
// after a specified time.
// Javascript is a single threaded language, 
// so it will execute the code sequentially.
console.log("one"); // synchronous programming
console.log("two");
// setTimeout: This function sets a timer which executes a callback function after the timer expires.
// Basic syntax: setTimeout(callback, delay)
setTimeout(function () {
    console.log('Three');
}, 4000);
console.log("four");
