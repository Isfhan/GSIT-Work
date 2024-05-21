var car = "Mehran";
// Basic Syntax of an object literal
// const objectName = {
// key: value
//}
var myCar = {
    name: "Mehran",
    color: "white",
    brand: "Suzuki",
    year: 2022,
    availableColors: ["white", "black", "red"],
    inStock: true
};
console.log(myCar); // logs the whole object
// Accessing Object Properties
console.log(myCar.brand); // logs the value of brand
console.log(myCar['year']); // Another way of accessing object properties
console.log('-------------------');
var person = {
    firstName: "adam",
    lastName: "Doe",
    age: 30,
    country: "USA",
    skinColor: "brown",
    isMarried: false,
    // Methods
    fullName: function () {
        return "".concat(this.firstName, " ").concat(this.lastName); // this refers to the object
    },
    sayHello: function () {
        return "Hello, my name is ".concat(this.fullName());
    }
};
console.log(person.fullName()); // Object Method
console.log(person.sayHello());
// Object in Typescript
console.log('-------------------');
var pet = {
    type: 'cat',
    name: 'tom',
    age: 5,
    color: 'gray',
    sayMeow: function () {
        return 'meow meow';
    }
};
console.log(pet.sayMeow());
var lucky = {
    type: 'dog',
    name: 'lucky',
    age: 3,
    color: 'white',
    sayWoof: function () {
        return 'woof woof';
    }
};
if (lucky.sayWoof) {
    console.log(lucky.sayWoof());
}
var Lucy = {
    type: 'dog',
    name: 'Lucy',
    age: 3,
    color: 'grey',
};
console.log(Lucy.color);
var myAge = 28;
console.log('-------------------');
var isfhan = {
    firstName: 'Isfhan',
    lastName: 'Ahmed',
    sayHello: function () {
        return "Hello, my name is ".concat(this.firstName, " ").concat(this.lastName);
    }
};
var spiderMan = {
    firstName: 'Peter',
    lastName: 'Parker',
    superPower: 'Spider-Sense with Web',
    heroName: 'Spider-Man',
    sayHello: function () {
        return "Hello, I am  ".concat(this.heroName);
    }
};
console.log(spiderMan.sayHello()); // logs the value of sayHello
