"use strict";
// Understanding callbacks hell
// Callback hell happens when multiple callbacks are nested,
// making the code hard to read and maintain.
function checkWeather_1(callback) {
    console.log("Checking the weather...");
    setTimeout(() => {
        console.log("Weather is awesome best for picnic!");
        callback();
    }, 500);
}
function cookGreenChicken(callback) {
    console.log("Preparing Green Chicken...");
    setTimeout(() => {
        console.log("Green Chicken is ready!");
        callback();
    }, 2000); // Simulates time taken to cook Biryani
}
function packBags_2(callback) {
    console.log("Packing stuff like drinks, snacks, and water bottles etc...");
    setTimeout(() => {
        console.log("Bags are packed!");
        callback();
    }, 1500);
}
function loadCar_1(callback) {
    console.log("Loading the car...");
    setTimeout(() => {
        console.log("Car is loaded!");
        callback();
    }, 1000);
}
// Invoking the function with multiple callbacks or callback hell
checkWeather_1(() => {
    cookGreenChicken(() => {
        packBags_2(() => {
            loadCar_1(() => {
                console.log('Happy picnic!');
            });
        });
    });
});
