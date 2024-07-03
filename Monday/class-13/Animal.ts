class Animal {

    // Acess Modifiers
    // public
    // private
    // protected

    constructor(public name: string, protected age: number) { }

    public eat() {
        console.log(this.name + " is eating");
    }
}

const snowBell = new Animal("Snow Bell", 2);
snowBell.eat();

console.log(snowBell.name);
