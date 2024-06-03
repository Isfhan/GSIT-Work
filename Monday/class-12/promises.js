"use strict";
function checkWeather_2() {
    return new Promise((resolve, reject) => {
        console.log("Checking the weather...");
        setTimeout(() => {
            console.log("Weather is clear!");
            resolve();
        }, 500);
    });
}
function prepareBurger() {
    return new Promise((resolve, reject) => {
        console.log("Preparing Burger...");
        setTimeout(() => {
            console.log("Burger is ready!");
            resolve();
        }, 2000);
    });
}
function packBags_3() {
    return new Promise((resolve, reject) => {
        console.log("Packing stuff like drinks, snacks, and water bottles etc...");
        setTimeout(() => {
            console.log("Bags are packed!");
            resolve();
        }, 1500);
    });
}
function loadCar_2() {
    return new Promise((resolve, reject) => {
        console.log("Loading the car...");
        setTimeout(() => {
            console.log("Car is loaded!");
            resolve();
        }, 1000);
    });
}
checkWeather_2()
    .then(prepareBurger)
    .then(packBags_3)
    .then(loadCar_2)
    .then(() => {
    console.log("Picnic preparations are complete! Here we go!");
})
    .catch((error) => {
    console.error("Failed to prepare for the picnic:", error);
});
