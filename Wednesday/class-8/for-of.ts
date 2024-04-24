// Basic syntax of for of loop
// for (variable of iterable) {
//     statement
// }

// Array is used to store multiple values in a single variable
const girls = ["sana", "sara", "ayesha", "marry"];

let index = 1;

// for of loop is used to iterate over an iterable object (like an array or a string)
for (let girl of girls) {

    console.log(`my ${index} sister is ${girl}`);
    
    index++;

}
