"use strict";
// Understanding setTimeout and Web APIs
// Web APIs is a set of APIs that are provided by the browser to JavaScript.
// setTimeout is a function that is used to schedule a function to be executed
// after a specified time.
console.log("one");
console.log("two");
// Basic syntax: setTimeout(callback, delay)
setTimeout(function () {
    console.log("three");
}, 5000);
console.log("four");
