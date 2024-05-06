"use strict";
// Basic Array syntax             0        1        2
const shoppingList = ["milk", "eggs", "bread"];
console.log(shoppingList, "line 4");
//                     3
shoppingList.push("oranges"); // Method to add elements to an array
console.log(shoppingList, "line 8");
// shoppingList.push(55); // This will throw an error
console.log("------------------------");
// const busTicketPrices: number[] = [100, 200, 300]; // first way of typing
const busTicketPrices = [100, 200, 300]; // second way of typing
busTicketPrices.push(400); // Method to adding elements to an array
console.log(busTicketPrices);
// This will not throw an error because it's type is number | string
busTicketPrices.push("hello");
console.log(busTicketPrices);
console.log("------------------------");
// Assessing array values
console.log(shoppingList[2]); // this will return the value at index 2
const girlsILikeNames = ["alina", "kiran", "nimra", "alishba", "sara"];
// girlsILikeNames.push("saba"); // This will throw an error because the array is readonly
console.log(girlsILikeNames);
console.log("------------------------");
// Updating array values
const myMostFavoriteGirlNames = ["alina", "kiran", "nimra", "alishba", "sara"];
myMostFavoriteGirlNames[2] = "sabina"; // This will update the value at index 2
console.log(myMostFavoriteGirlNames);
