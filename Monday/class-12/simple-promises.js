"use strict";
// Understanding Promises
// Promises provide a cleaner way to handle asynchronous operations.
// They represent a value that may be available now,
// or in the future, or never.
// Key Concepts:
// Pending: Initial state
// Fulfilled: Operation completed successfully = resolved
// Rejected: Operation failed = rejected
// Basic syntax: const promise = new Promise((resolve, reject) => {})
console.log("one");
console.log("two");
const promise = new Promise((resolve, reject) => {
    const isResolved = true;
    if (isResolved) {
        resolve('three');
    }
    else {
        reject("error");
    }
}).then((val) => {
    console.log(val);
});
console.log("four");
