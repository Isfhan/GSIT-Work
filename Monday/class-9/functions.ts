// Basic Syntax of functions
// function functionName(parameter1, parameter2, parameter3) {
//   function Body
// }

function myInfo(): void { // function declaration

    // function body
    console.log("Hi my name is Isfhan Ahmed");
    console.log("I am from Pakistan");
    console.log("I am a Software engineer");

    console.log("-----------------------------");

}

myInfo(); // invoke function
myInfo(); // invoke function
myInfo(); // invoke function


// Function with parameters
function myInfoWithParameter(name: string, country: string, job: string): void {

    // function body
    console.log("Hi my name is", name); // Argument pass log
    console.log(`I am from ${country}`); // template string
    console.log("I am a " + job); // concatenation

    console.log("-----------------------------");
}

myInfoWithParameter('Karan kummar', 'India', 'Software Engineer');
myInfoWithParameter('Alishba', 'Pakistan', 'Software Engineer');

// Function with Default Parameters
function myInfoWithDefaultParameter(name: string, country: string, job: string = "Software Engineer"): void {

    // function body    
    console.log("Hi my name is", name); // Argument pass log
    console.log(`I am from ${country}`); // template string
    console.log("I am a " + job); // concatenation

    console.log("-----------------------------");

}


myInfoWithDefaultParameter('Ahmed', 'Pakistan', 'Boss');
myInfoWithDefaultParameter('Ahmed', 'Pakistan');

// Function with Optional Parameters
function myInfoWithOptionalParameter(name: string, country: string, job?: string): void {

    // function body    
    console.log("Hi my name is", name); // Argument pass log
    console.log(`I am from ${country}`); // template string

    if (job) {

        console.log("I am a " + job); // concatenation
    }

    console.log("-----------------------------");
}

myInfoWithOptionalParameter('Aijaz', 'Pakistan');


// Function with Return Type
function myFunctionWithReturnType(n1: number, n2: number): number {

    // return n1 + n2;

    return n1 + n2;
}


const result: number = myFunctionWithReturnType(10, 20);
console.log(result);


// Function that hoisted
logDateTime();

function logDateTime(): void {

    const date: Date = new Date();
    console.log(date);
}

// function expression
const myInfoWithFunctionExpression = function (): void {

    // function body
    console.log("Hi my name is Isfhan Ahmed");
    console.log("I am from Pakistan");

}

myInfoWithFunctionExpression();


// Arrow Function
const myMultiplicationWithArrowFunction = (num1: number, num2: number) => num1 * num2;


const result2: number = myMultiplicationWithArrowFunction(10, 20);
console.log(result2);

// Arrow Function with multiple parameters
const myInfoWithArrowFunction = (name: string, country: string, job: string) => {

    // function body
    console.log("Hi my name is", name); // Argument pass log
    console.log(`I am from ${country}`); // template string
    console.log("I am a " + job); // concatenation
}

// Arrow Function with Rest Parameters
const sumAllNumbers = (...numbers: number[]): number => {
    console.log(numbers);
    console.log(typeof numbers);
    
    
    let total: number = 0;
    for (const number of numbers) {
        total += number; // total = total + number
    }

    return total;
}


const result3: number = sumAllNumbers(10, 20, 30, 40, 50,100,400);
console.log(result3);

