"use strict";
// Understanding async/await
// async/await is a syntax that allows you to write asynchronous code
// without using callbacks or promises.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Async/Await makes working with promises easier by allowing us to 
// write asynchronous code that looks like synchronous code.
function checkWeather_3() {
    return new Promise((resolve, reject) => {
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
function preparePicnic() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield checkWeather_3();
            yield prepareBeefBurger();
            yield packBags_4();
            yield loadCar_3();
            console.log("Picnic preparations are complete! Here we go!");
        }
        catch (error) {
            console.error("Failed to prepare for the picnic:", error);
        }
    });
}
preparePicnic();
console.log("After picnic function");
