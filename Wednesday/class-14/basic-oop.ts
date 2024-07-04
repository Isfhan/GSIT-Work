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
}

const car2 = {
    model: "Civic",
    color: "black",
    engine: "1800cc",
    wheels: 4
}

// 2. class
class Car {

    // Access modifiers
    // public - default
    // private
    // protected

    public model: string // property or attribute
    public color: string
    public engine: string
    public wheels: number
    private trackerNumber: number
    // Constructor invoked when an object is created with new keyword
    constructor(
        m: string,
        c: string,
        e: string,
        w: number,
        t: number
    ) {

        this.model = m
        this.color = c
        this.engine = e
        this.wheels = w
        this.trackerNumber = t
    }

    // Methods
    getCarDetails() {
        console.log(this.model, this.color, this.engine, this.wheels);
    }

}

const mehran: Car = new Car("Mehran", "blue", "800cc", 4, 12345);
const civic: Car = new Car("Civic", "black", "1800cc", 4,56465);
const landrover: Car = new Car("Landrover", "white", "2000cc", 4,878676);

console.log(mehran.model); // accessing property
console.log(civic.model);
console.log(landrover.model);

console.log("-------------------");

mehran.getCarDetails(); // accessing method
civic.getCarDetails();   
landrover.getCarDetails();

// console.log(mehran.trackerNumber); // will give error

