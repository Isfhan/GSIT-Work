var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Yellow"] = 3] = "Yellow";
    Color[Color["Black"] = 4] = "Black";
    Color[Color["White"] = 5] = "White";
    Color[Color["Orange"] = 6] = "Orange";
    Color[Color["Purple"] = 7] = "Purple";
})(Color || (Color = {}));
var myFavColor = Color.Purple;
console.log(myFavColor);
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);
// Food enum
var Food;
(function (Food) {
    Food[Food["Pizza"] = 0] = "Pizza";
    Food[Food["Burger"] = 1] = "Burger";
    Food[Food["Chips"] = 2] = "Chips";
})(Food || (Food = {}));
var MyFoodOrder = Food.Pizza;
if (MyFoodOrder === Food.Pizza) {
    console.log('I ordered Pizza');
}
else if (MyFoodOrder === Food.Burger) {
    console.log('I ordered Burger');
}
else {
    console.log('I ordered Chips');
}
// Enum strings - Fully Initialized
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Placed"] = "Your order has been placed";
    OrderStatus["Processing"] = "Your order is being processed";
    OrderStatus["Shipped"] = "Your order has been shipped";
    OrderStatus["Delivered"] = "Your order has been delivered";
})(OrderStatus || (OrderStatus = {}));
// Create a variable 'orderStatus' and assign it the value 'OrderStatus.Processing'
var orderStatus = OrderStatus.Processing;
console.log(orderStatus); // logs "Your order is being processed"
