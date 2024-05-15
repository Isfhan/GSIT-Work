// Basic Syntax
// function functionName(param1, param2) {
//  function body  
//}
var myFriends = ['Ali', 'Afzal', 'Rida', 'Aqsa'];
var unFriends = [];
// function declaration with parameters
function addFriend(name) {
    // function body
    // Push name to array
    myFriends.push(name);
}
addFriend('Muneeb');
console.log("--------------------------------------------");
// Function with return type
function removeFriend(name) {
    // Remove name from array
    var myNewFriends = [];
    for (var _i = 0, myFriends_1 = myFriends; _i < myFriends_1.length; _i++) {
        var friend = myFriends_1[_i];
        if (friend !== name) {
            myNewFriends.push(friend);
        }
        myFriends = myNewFriends;
    }
    return name;
}
var removedFriend = removeFriend('Ali');
unFriends.push(removedFriend);
console.log('myFriends', myFriends);
console.log('unFriends', unFriends);
