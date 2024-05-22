var _this = this;
var carName = "CiviC"; // Simple way of storing data
// Simple object
var car = {
    // key:"value",
    name: "Mercedes", // properties
    color: "Black",
    year: 2021,
    engine: 2.0,
    price: '$100000',
    inStock: true,
    availableColors: ["Red", "Blue", "Green"]
};
console.log(car); // log whole object
console.log('------------------------------------');
var person = {
    // key:"value",
    country: "USA",
    name: "John", // properties
    age: 30,
    city: "New York",
    married: true,
    cars: ["Ford", "BMW", "Fiat"],
};
console.log(person); // log whole object
console.log(person.country); // log specific property
console.log(person['cars']); // another way to log specific property
console.log('------------------------------------');
var personTwo = {
    // key:"value",
    firstName: "Isfhan", // properties
    LatName: "Ahmed", // properties
    age: 28,
    country: "Pakistan",
    city: "Karachi",
    married: true,
    fullName: function () {
        console.log('kuch bhi', this); // log this object
        console.log(this.firstName + " " + this.LatName);
    },
    getBirthYear: function () {
        console.log(_this); // log this object
        console.log('age', _this.age); // log undefined because of arrow function
        return 2024 - _this.age; // return NaN
    }
};
// Invoke personTwo method
personTwo.fullName();
// Invoke personTwo method
console.log(personTwo.getBirthYear()); // will return NaN because of arrow function
// Update personTwo property
personTwo.age = 25;
console.log(personTwo);
console.log('------------------------------------');
var pet = {
    name: "Oreo",
    color: "Black",
    age: 2,
    food: "Milk",
    eat: function () {
        console.log('I am eating', this); // log this object
        console.log('I am eating', this.food); // log food property
    }
};
// Optional property
var pet2 = {
    name: "Mano",
    color: "White",
    age: 3,
    food: "Fish",
};
console.log(pet2.food); // log food property
