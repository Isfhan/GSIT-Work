let carName: string = "CiviC"; // Simple way of storing data


// Simple object
const car = {
    // key:"value",
    name: "Mercedes", // properties
    color: "Black",
    year: 2021,
    engine: 2.0,
    price: '$100000',
    inStock: true,
    availableColors: ["Red", "Blue", "Green"]
}

console.log(car); // log whole object

console.log('------------------------------------');

const person = {
    // key:"value",
    country: "USA",
    name: "John", // properties
    age: 30,
    city: "New York",
    married: true,
    cars: ["Ford", "BMW", "Fiat"],

}


console.log(person); // log whole object
console.log(person.country); // log specific property
console.log(person['cars']); // another way to log specific property


console.log('------------------------------------');

const personTwo = {
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
    getBirthYear: () => { // arrow function will return NaN

        console.log(this); // log this object

        console.log('age', this.age); // log undefined because of arrow function

        return 2024 - this.age; // return NaN
    }
}

// Invoke personTwo method
personTwo.fullName();

// Invoke personTwo method
console.log(personTwo.getBirthYear()); // will return NaN because of arrow function

// Update personTwo property
personTwo.age = 25;

console.log(personTwo);

console.log('------------------------------------');

const pet: {
    name: string, // required property
    color: string,
    age: number,
    food: string,
    eat: () => void
} = {
    name: "Oreo",
    color: "Black",
    age: 2,
    food: "Milk",
    eat: function () {
        console.log('I am eating', this.food); // log food property
    }
}

console.log(pet);

console.log('------------------------------------');


// Optional property
const pet2: {
    name: string, // required property
    color: string,
    age: number,
    food: string,
    eat?: () => void // optional property
} = {
    name: "Mano",
    color: "White",
    age: 3,
    food: "Fish",
}

console.log(pet2.food); // log food property

console.log('------------------------------------');


// Define Custom object type

type Age = string | number; // Custom data type for age

const age: Age = 24;

console.log('------------------------------------');


type Pet = {
    name: string, // required property
    color: string,
    age: number,
    food: string,
    eat?: () => void // optional property
}

const pet3: Pet = {
    name: "Tom",
    color: "Gray and white",
    age: 5,
    food: "Jerry",
}

console.log(pet3);

console.log('------------------------------------');

const pet4: Pet = {
    name: "Jerry",
    color: "Brown",
    age: 1,
    food: "Cheese",
    eat: function () {
        console.log('I am eating', this.food); // log food property
    }
}

if (pet4.eat) {
    pet4.eat();
}

interface Human {
    name: string,
    age: number,
    sleep: () => void,
    legs: number,
    hand: number
}


const john: Human = {

    name: "John",
    age: 30,
    sleep: () => {
        console.log('I am sleeping');
    },
    legs: 2,
    hand: 2
}

console.log(john);

console.log('------------------------------------');

interface SuperHero extends Human {
    superPower: string,
    heroName: string
}


const spiderMan: SuperHero = {

    name: "Peter Parker",
    age: 30,
    sleep: () => {
        console.log('I am sleeping');
    },
    legs: 2,
    hand: 2,
    superPower: "Spider Sense and Web Sense",
    heroName: "Spider Man"
}