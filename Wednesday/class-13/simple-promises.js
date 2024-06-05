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
const order = new Promise(function (resolve, reject) {
    const isBiryani = false;
    if (isBiryani) {
        resolve("Biryani is ready");
    }
    else {
        reject("Biryani is not ready");
    }
});
console.log(order);
order
    .then((val) => console.log(val)) // Run only when the promise is resolved
    .catch((err) => console.log(err)); // Run only when the promise is rejected
