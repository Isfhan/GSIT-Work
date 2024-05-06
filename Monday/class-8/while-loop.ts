// basic syntax of while loop
// while (condition) {
//     statement
// }

let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}


console.log('-------------------');


let ramadanDay = 1;
let isRamadan = true;

while (isRamadan) {

    if (ramadanDay === 30) {

        isRamadan = false;
        console.log('Ramadan is over');
       

    } else {
        console.log('yes we are selling pakoras');
    }

    ramadanDay++;
}

console.log('-------------------');

// Basic syntax of do while loop
// do {
//     statement
// } while (condition);

const isFoodFresh = false;
do {

    console.log('eating ...');
    
} while (isFoodFresh);


// do while
let j = 11;

// do while loop execute the statement first then check the condition 
do {
    console.log(7, "x", j, "=", 7 * j, "line 54");
    j++;
}
while (j <= 10); // condition is false