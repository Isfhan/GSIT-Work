"use strict";
// Understanding callbacks
// A callback is a function that is passed as an argument to another function.
// and are called after the completion of the function.
// Real-Life Example: Imagine you're planning a picnic.
// You start by making Paulo, then packing stuff
// Each step depends on the previous one being completed.
function cookPaulo(callback) {
    console.log("Preparing Paulo...");
    setTimeout(() => {
        console.log("Paulo is ready!");
        callback(); // invoke the callback
    }, 2000); // Simulates time taken to cook Paulo
}
function packBags_1() {
    console.log("Packing stuff like drinks, snacks, and water bottles etc...");
    setTimeout(() => {
        console.log("Bags are packed!");
    }, 1500);
}
cookPaulo(packBags_1);
