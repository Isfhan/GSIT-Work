// Basic Syntax
// function functionName(param1, param2) {
//  function body  
//}

let myFriends: string[] = ['aisha','areesha'];
const unFriends: string[] = [];

// function declaration with parameters
function addFriend(name: string): void {

    // function body
    // Push name to array
    myFriends.push(name);

}

addFriend('usman');
addFriend('sunny');

console.log("--------------------------------------------");


// Function with return type
function removeFriend(name: string): string {

    // Remove name from array
    let myNewFriends: string[] = [];

    for (const friend of myFriends) {
        if (friend !== name) {
            myNewFriends.push(friend);
        }
        myFriends = myNewFriends;
    }
    return name;
}

const removedFriend = removeFriend('areesha');
unFriends.push(removedFriend);

console.log('myFriends', myFriends);
console.log('unFriends', unFriends);


