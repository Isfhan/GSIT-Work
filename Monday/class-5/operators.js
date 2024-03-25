var add = Math.pow(2, 4);
console.log(add);
// assignment operators
var pizzaPrice = 1000;
var tax = 150;
// let total = pizzaPrice + tax; // long way
// console.log(total);
pizzaPrice += tax; // short way pizzaPrice = pizzaPrice + tax
console.log("pizza price = ", pizzaPrice); // 1000 + 150 = 1150
var dataBasePassword = "12345"; // when i created my account i set this password
var maraPasswordJoMaDaalRhaHo = 12345;
console.log("line no 19", dataBasePassword == maraPasswordJoMaDaalRhaHo); // boolean
console.log("line no 20", dataBasePassword === maraPasswordJoMaDaalRhaHo); // boolean
// not equal
var password = "12345";
var confirmPassword = "12345";
console.log("line no 27", password != confirmPassword); // boolean
console.log("line no 28", password !== confirmPassword); // boolean
console.log(!true);
console.log(!false);
// string comparison
var text1 = "A";
var text2 = "B";
var result = text1 < text2;
console.log("line no 37 = ", result);
