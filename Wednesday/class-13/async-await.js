"use strict";
// Understanding async/await
// async/await is a syntax that allows you to write asynchronous code
// without using callbacks or promises.
// Async/Await makes working with promises easier by allowing us to 
// write asynchronous code that looks like synchronous code.
function checkWeather_3() {
    new Promise((resolve, reject) => {
        console.log("Checking the weather...");
        setTimeout(() => {
            console.log("Weather is clear!");
            resolve();
        }, 500);
    });
}
function prepareBeefBurger() {
    return new Promise((resolve, reject) => {
        console.log("Preparing BeefBurger...");
        setTimeout(() => {
            console.log("BeefBurger is ready!");
            resolve();
        }, 2000);
    });
}
function packBags_4() {
    return new Promise((resolve, reject) => {
        console.log("Packing stuff like drinks, snacks, and water bottles etc...");
        setTimeout(() => {
            console.log("Bags are packed!");
            resolve();
        }, 1500);
    });
}
function loadCar_3() {
    return new Promise((resolve, reject) => {
        console.log("Loading the car...");
        setTimeout(() => {
            console.log("Car is loaded!");
            resolve();
        }, 1000);
    });
}
console.log("Before picnic function");
async function preparePicnic() {
    try {
        await checkWeather_3();
        await prepareBeefBurger();
        await packBags_4();
        await loadCar_3();
        console.log("Picnic is ready!");
    }
    catch (error) {
        console.log(error);
    }
}
preparePicnic();
console.log("After picnic function");
