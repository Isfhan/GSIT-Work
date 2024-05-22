// Default numeric based enum

enum Color { // Default index is 0
    Red,
    Green,
    Blue,
    Yellow,
    Black,
    White,
    Orange,
    Purple
}

const myFavColor: Color = Color.Purple;
console.log(myFavColor);

enum StatusCodes { // Fully Initialized Enums
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}

// logs 404
console.log(StatusCodes.NotFound);

// logs 200
console.log(StatusCodes.Success);


// Food enum
enum Food {
    Pizza,
    Burger,
    Chips
}

const MyFoodOrder: Food = Food.Pizza;

if (MyFoodOrder === Food.Pizza) {

    console.log('I ordered Pizza');

} else if (MyFoodOrder === Food.Burger) {

    console.log('I ordered Burger');

} else {

    console.log('I ordered Chips');

}


// Enum strings - Fully Initialized
enum OrderStatus {
    Placed = "Your order has been placed",
    Processing = "Your order is being processed",
    Shipped = "Your order has been shipped",
    Delivered = "Your order has been delivered",
}

// Create a variable 'orderStatus' and assign it the value 'OrderStatus.Processing'
let orderStatus: OrderStatus = OrderStatus.Processing;

console.log(orderStatus); // logs "Your order is being processed"