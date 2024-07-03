"use strict";
class Animal {
    name;
    age;
    // Acess Modifiers
    // public
    // private
    // protected
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(this.name + " is eating");
    }
}
const snowBell = new Animal("Snow Bell", 2);
snowBell.eat();
console.log(snowBell.name);
