"use strict";
// OOP stand for Object Oriented Programming
// OOP is a programming paradigm that uses 
// objects and classes to model real-world entities and their relationships. 
// It is a fundamental paradigm of software development.
// 1. Object no reusability
const car = {
    model: "Farari",
    color: "red",
    engine: "800cc",
    wheels: 4
};
const car2 = {
    model: "Civic",
    color: "black",
    engine: "1800cc",
    wheels: 4
};
// 2. class
class Car {
    model; // property or attribute
    color;
    engine;
    wheels;
    // Constructor invoked when an object is created with new keyword
    constructor(m, c, e, w) {
        this.model = m;
        this.color = c;
        this.engine = e;
        this.wheels = w;
    }
    // Methods
    getCarDetails() {
        console.log(this.model, this.color, this.engine, this.wheels);
    }
}
const mehran = new Car("Mehran", "blue", "800cc", 4);
const civic = new Car("Civic", "black", "1800cc", 4);
const landrover = new Car("Landrover", "white", "2000cc", 4);
console.log(mehran.model); // accessing property
console.log(civic.model);
console.log(landrover.model);
console.log("-------------------");
mehran.getCarDetails(); // accessing method
civic.getCarDetails();
landrover.getCarDetails();
