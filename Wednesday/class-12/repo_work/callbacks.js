function myCallBack(text) {
    console.log("inside myCallback " + text);
}
// myCallBack("Hello World"); 
function callingFunction(initialText, callback) {
    console.log('zaruri kaam sa sojao');
    callback(initialText);
}
callingFunction("Hello World", myCallBack); // first way
callingFunction("Hello World", function (text) {
    console.log(" custom callback " + text);
});
callingFunction("Hello World", function (text) {
    console.log(" custom callback with function keyword " + text);
});
