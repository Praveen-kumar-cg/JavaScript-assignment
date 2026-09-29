const prompt = require("prompt-sync")();
//D. Nested if Statement

// //Q1
// let num1=Number(prompt("enter an number:-"))
// if (num1>10){
//     if(num1%3==0){
//         console.log("numner is greater tha 10 and divisible by 3")
//     }
// }

// //Q2
// let age=Number(prompt("enter the age:-"))
// let voterId=true
// if (age>=18){
//     if (voterId==true){
//         console.log("can vote")
//     }

// }

//Q3
let scoreMarkas=Number(prompt("enter score:-"))
if (scoreMarkas>=40){
    if (scoreMarkas>=80){
        console.log("Passed with distinction")
    }
}

//Q4
let pin=Number(prompt("enter your pin"))
let accountBalance=1213111;
if (pin==1213){
    if (accountBalance>0){
        console.log("can withdrawl")
    }
}

//Q5
let year=Number(prompt("enter year:-"))
if (year%4==0){
    if (year%100==0){
        console.log("leap year")
    }
}

//Q6




//Q7
let cartTotal = Number(prompt("Enter cart total:"));
let isPremium = prompt("Are you a premium member? (yes/no)");
if (cartTotal >= 1000) {
    if (isPremium === "yes") {
        cartTotal = cartTotal - (cartTotal * 20 / 100);
    } else {
        cartTotal = cartTotal - (cartTotal * 10 / 100);
    }
}
console.log("Final Amount: ₹" + cartTotal);


//Q8
let number = Number(prompt("Enter a number:"));
if (number > 0) {
    if (number % 2 === 0) {
        if (number % 4 === 0) {
            console.log("Positive Even and Divisible by 4");
        }
    }
}


//Q9
let age = Number(prompt("Enter your age:"));
let hasDegree = prompt("Do you have a graduation degree? (yes/no)");
let experience = Number(prompt("Enter your years of experience:"));

if (age >= 21 && age <= 30) {
    if (hasDegree === "yes") {
        if (experience >= 2) {
            console.log("Eligible for Interview");
        }
    }
}


//Q10
let present = prompt("Is the student present? (yes/no)");
let internalMarks = Number(prompt("Enter internal marks:"));
let externalMarks = Number(prompt("Enter external marks:"));

if (present === "yes") {
    if (internalMarks >= 30) {
        if (externalMarks >= 35) {
            console.log("Eligible for Final Exam");
        }
    }
}