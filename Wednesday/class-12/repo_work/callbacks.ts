function myCallBack(text: string) { // simple function with parameter
    console.log("inside myCallback " + text);
}

// myCallBack("Hello World"); 


// function that takes function as parameter
function callingFunction(initialText: string, callback: (text: string) => void)
{
    console.log('zaruri kaam sa sojao');
    
    callback(initialText);
}

// Invoke function with argument and callback function first way
callingFunction("Hello World", myCallBack); 

// Invoke function with argument second way with arrow function
callingFunction("Hello World", (text) => { 
    console.log(" second way with arrow function callback " + text);
});

// Invoke function with argument third way with function keyword
callingFunction("Hello World", function (text) { // send
    console.log(" custom callback with function keyword " + text);
});