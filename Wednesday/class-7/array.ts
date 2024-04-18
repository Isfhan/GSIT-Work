

// simple array example typescript
const cart: string[] = ["Rice", "Wheat", "Oil"];

console.log(cart);

console.log("---------------------");


// simple array example typescript different syntax
const myContacts: Array<string> = [
    "Isfhan",
    "Ahmed",
    "Hussain"
];

console.log(myContacts);

console.log("---------------------");

                            // 0          1         2
const myTiffinBox: Array<string> = ["Rice", "daal", "chicken"];
console.log("Here is my cart third element", myTiffinBox[2]); // this syntax get the element myTiffinBox[index]

console.log("before changing",myTiffinBox);

myTiffinBox[2] = "daal makhani"; // this syntax change the element
myTiffinBox[3] = "cup cake"; // this syntax add element in array

console.log("after changing",myTiffinBox);

console.log("---------------------");


console.log("length of myTiffinBox", myTiffinBox.length); // this syntax get the length of myTiffinBox.length and it is a property

console.log("---------------------");

myTiffinBox.push("samosa"); // this syntax add element in array
console.log(myTiffinBox);

myTiffinBox.pop(); // this syntax remove element in array
console.log(myTiffinBox);

const names: string[] = [];
names.push("ALI"); // no error
console.log(names);

// names.push(39); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

const myWifes: readonly string[] = ["Wife1", "Wife2"]; // readonly array
// myWifes.push("Wife3"); // gives error
// myWifes[3] = "Wife3"; // gives error
console.log(myWifes);






