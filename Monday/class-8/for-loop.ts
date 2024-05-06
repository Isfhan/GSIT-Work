// Basic syntax of for loop
// for (initialization; condition; increment/decrement) {
//     statement
// }

// Initialization means where the loop starts
// Condition is used to check if the loop should continue
// Increment/decrement is used to update the value of i

// basic for loop that prints 0, 1, 2, 3, 4, 5
for (let i = 0; i <= 5; i++) { // i = 0, 1, 2, 3, 4, 5
    console.log(i);
}

console.log('-------------------');

// > greater than
// < less than
// >= greater than or equal to
// <= less than or equal to
// == equal to
// != not equal to

// basic for loop that prints 5, 4, 3, 2, 1
for (let i = 5; i > 0; i--) { // i = 5, 4, 3, 2, 1
    console.log(i);
}


// Generate table using for loop  
for (let i = 1; i <= 10; i++) {

    const tableNumber = 5;

    console.log(`${tableNumber} x ${i} = ${tableNumber * i}`); // 2 x 1 = 2 

}


console.log('-------------------');

// for loop with break statement that prints odd numbers from 1 to 10
for (let i = 1; i <= 10; i++) {

    if (i % 2 === 0) {
        continue; // means skip the rest of the code and go to the next iteration
    } else {
        console.log(i);
    }
}

console.log('-------------------');

// for loop with break statement that prints even numbers from 1 to 10
for (let i = 1;;i++) {

    if (i > 10) {
        break;
    } else {
        console.log(i);
    }
}