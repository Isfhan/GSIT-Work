function myInfo(): void { // function declaration

    // function body
    console.log("Hi my name is Isfhan Ahmed");
    console.log("I am from Pakistan");
    console.log("I am a Software engineer");

    console.log("-----------------------------");

}


myInfo(); // invoke function
myInfo();
myInfo();
myInfo();


// Function with required parameters
function myInfoWithParameter(name: string, country: string, job: string): void {

    // function body
    console.log("Hi my name is", name); // Argument pass log
    console.log(`I am from ${country}`); // template string
    console.log("I am a " + job); // concatenation

    console.log("-----------------------------");
}


myInfoWithParameter("Aisha", "Pakistan", "Teacher");
myInfoWithParameter("Areesha", "Pakistan", "Teacher and Programmer");
myInfoWithParameter("Muneeb", "Pakistan", "Programmer");
myInfoWithParameter("Sunny", "Pakistan", "Typescript Programmer");



// Function with Default Parameters
function myInfoWithDefaultParameter(name: string, country: string, job: string = "Software Engineer"): void {

    // function body    
    console.log("Hi my name is", name); // Argument pass log
    console.log(`I am from ${country}`); // template string
    console.log("I am a " + job); // concatenation

    console.log("-----------------------------");

}


myInfoWithDefaultParameter("zubaida", "Pakistan");
myInfoWithDefaultParameter("usman", "Pakistan");
myInfoWithDefaultParameter("Aisha", "Pakistan", "Teacher");


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

myInfoWithOptionalParameter("Noor ul huda", "Pakistan");



// Function with Return Type
function myFunctionWithReturnType(n1: number, n2: number): number {

    // return n1 + n2;

    return n1 + n2;
}

const result: number = myFunctionWithReturnType(10, 20);
console.log(result);
console.log(myFunctionWithReturnType(50, 20));

// Function that hoisted
logDate();

function logDate(): void {

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


// Self Invoking Function
(function () {

    // function body
    console.log("Hi I am Isfhan from self invoking function");

})();


// Arrow Function
const myMultiplicationWithArrowFunction = (num1: number, num2: number) => num1 * num2;

const result2: number = myMultiplicationWithArrowFunction(10, 20);
console.log(result2);

// Before Arrow Function expression
const beforeArrowFunction = function (num1: number, num2: number): number {

    return num1 - num2;

};

console.log(beforeArrowFunction(123, 23));

// Arrow Function with Rest Parameters
const sumAllNumbers = (message: string, ...numbers: number[]): number | void => {
    console.log(numbers);
    console.log(typeof numbers);

    console.log(message);

    let total: number = 0;
    for (const number of numbers) {
        total += number; // total = total + number
    }

    return total;
}

const result3: number | void = sumAllNumbers("hello i am rest parameters function", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(result3);