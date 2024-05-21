let car: string = "Mehran";

// Basic Syntax of an object literal
// const objectName = {
// key: value
//}


const myCar = {
    name: "Mehran",
    color: "white",
    brand: "Suzuki",
    year: 2022,
    availableColors: ["white", "black", "red"],
    inStock: true
}


console.log(myCar); // logs the whole object

// Accessing Object Properties
console.log(myCar.brand); // logs the value of brand

console.log(myCar['year']); // Another way of accessing object properties

console.log('-------------------');

const person = {
    firstName: "adam",
    lastName: "Doe",
    age: 30,
    country: "USA",
    skinColor: "brown",
    isMarried: false,

    // Methods
    fullName: function () {
        return `${this.firstName} ${this.lastName}` // this refers to the object
    },

    sayHello: function () {

        return `Hello, my name is ${this.fullName()}`
    }
}

console.log(person.fullName()); // Object Method
console.log(person.sayHello());


// Object in Typescript
console.log('-------------------');

const pet: {
    type: string,
    name: string,
    age: number,
    color: string,
    sayMeow: () => string
} = {
    type: 'cat',
    name: 'tom',
    age: 5,
    color: 'gray',
    sayMeow: function () {
        return 'meow meow';
    }
}

console.log(pet.sayMeow());


type Pet = { // Type Alias
    type: string,
    name: string,
    age: number,
    color: string,
    sayMeow?: () => string,
    sayWoof?: () => string
}

const lucky: Pet = {
    type: 'dog',
    name: 'lucky',
    age: 3,
    color: 'white',
    sayWoof: function () {
        return 'woof woof';
    }
}

if (lucky.sayWoof) {
    console.log(lucky.sayWoof());
}

const Lucy: Pet = {
    type: 'dog',
    name: 'Lucy',
    age: 3,
    color: 'grey',
}

console.log(Lucy.color);


type Age = number | string; // Custom Type or Union or type alias

const myAge: Age = 28;


console.log('-------------------');

// Interface in Typescript
interface Person {
    firstName: string,
    lastName: string,
    sayHello: () => string
}

const isfhan: Person = {
    firstName: 'Isfhan',
    lastName: 'Ahmed',
    sayHello: function () {
        return `Hello, my name is ${this.firstName} ${this.lastName}`
    }
}

interface SuperHero extends Person {
    superPower: string,
    heroName: string
}

const spiderMan: SuperHero = {
    firstName: 'Peter',
    lastName: 'Parker',
    superPower: 'Spider-Sense with Web',
    heroName: 'Spider-Man',
    sayHello: function () {
        return `Hello, I am  ${this.heroName}`
    }
}

console.log(spiderMan.sayHello()); // logs the value of sayHello