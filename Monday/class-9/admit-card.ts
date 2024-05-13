function admitCard(
    name: string, // parameter
    rollNumber: number, // parameter
    courseName: string = "Typescript", // parameter with default value
    phone?: number // optional parameter
): void {

    // function body
    console.log('#------------------------#');

    console.log("Name: " + name); // concatenation
    console.log(`Roll Number:  + ${rollNumber}`); // template literal (ES6)
    console.log("Course Name: " + courseName);

    // check if phone is not undefined
    if (phone) {
        console.log("Phone Number: " + phone);
    }

    console.log('#------------------------#');
}

// invoke function
admitCard("Farhan", 3537, "Next.js", 1234567890) // argument
admitCard("Esha", 422422, undefined, 1090078601) // argument with default value 


// // student list array object
// const studentsList = [
//     {
//         name: "Farhan",
//         rollNumber: 3537,
//         courseName: "Next.js",
//         phone: 12346777567890
//     },
//     {
//         name: "sammy",
//         rollNumber: 422422,
//         courseName: "Typescript",
//         phone: 1090078601
//     },
//     {
//         name: "Laiba",
//         rollNumber: 35787,
//         courseName: "Python"
//     },
// ]


// // loop through array of object
// for (const student of studentsList) {

//     // invoke function with object value as argument
//     admitCard(student.name, student.rollNumber, student.courseName, student.phone)
// }