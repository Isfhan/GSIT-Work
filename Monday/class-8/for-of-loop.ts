// Basic syntax of for of loop
// for (variable of array) {
//     statement
// }

// loop on an array
const myClothes: string[] = ['t-shirt', 'sweater', 'shoes', 'sunglasses', 'coat','pants', 'belt'];

for(const item of myClothes) {
    console.log(item);
}

console.log('-------------------');

// loop on string
for (const alphabet of 'hello') {
    console.log(alphabet);
}
