const dayNumber: number = 1;

switch (dayNumber) {
    case 1:
        console.log('Monday');
       break;
    case 2:
        console.log('Tuesday');
       break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:    
        console.log('Invalid day');
}


// Custom type with union operator
type myAnswer = "yes" | "no" | "nahi" | "haan" | "YES" | "NO"; 


// Create a variable with myAnswer type
const isClassOnMonday:myAnswer = "nahi"; 

// Use switch case with myAnswer type
switch (isClassOnMonday) {
    case "yes" as myAnswer: // Type assertion or type casting
    case "YES" as myAnswer:
    case "haan" as myAnswer:
        console.log('There is class');
        break;
    case "no" as myAnswer:
    case "NO" as myAnswer:
    case "nahi" as myAnswer:
        console.log('There is no class');
        break;
    default:
        console.log('Invalid input');
}