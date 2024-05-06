// basic syntax for tuple

const myTuple: [string, number, boolean] = ["hello", 10, true];

console.log(myTuple);

console.log(myTuple[0]); // Accessing tuple values
console.log(myTuple[1]); // Accessing tuple values
console.log(myTuple[2]); // Accessing tuple values

// myTuple[3] = "hello"; // This will throw an error

console.log(myTuple);

myTuple.push("hello2");

console.log(myTuple);

let foodItem: [mainDish: string, sweetDish: number];

foodItem = ["pizza", 10];

console.log(foodItem);
