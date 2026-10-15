//Q1
//A function in JavaScript is a reusable block of code designed to perform a specific task. We can define a function once and call it whenever we need it.

//Q2
function greetstudent(name){
    return `Hello ${name}, welcome to CodingGita!`

}
console.log(greetstudent("Praveen"))


//Q3
//Hoisting is a JavaScript behavior in which function declarations are available before their position in the code during execution. Therefore, we can call a function before writing its declaration in the program.


//Q4
let calculateAverage=function(a,b,c){
    return (a + b + c) / 3;

}
console.log(calculateAverage(10,20,30))

//Q5
// Parameters are variables defined in a function declaration, whereas arguments are the actual values passed to the function when it is called.

function multiply5(x, y) {                           ////parameter
    return x * y;
}
console.log(multiply5(12, 5));                                   // //argument



//Q6
function iseven6(n6){
    if (n6%2==0){
        return "even"
    }else{
        return "odd"
    }
}
console.log(iseven6(12))


//Q7
function findPercentage7(obtainedMarks7,totalMarks7){
    return (obtainedMarks7/totalMarks7)*100
}
console.log(findPercentage7(456 ,500))


//Q8
function noreturn(){

}
console.log(noreturn())



//Q9
function calculateSimpleInterest8(principal8,rate8,time8){
    SI=(principal8 * rate8 * time8) / 100;
    return SI
}
console.log(calculateSimpleInterest8(10000,5,2))


//Q10
//[a]
//A function declaration can be called before it is defined due to hoisting, whereas a function expression cannot be called before its initialization.

//[b]
function studentdata10(name10,marks10){
    return `Student ${name10} has scored ${marks10} marks.`
}
console.log(studentdata10("Praven",500))


//Q11
[a]
//Local scope means a variable is accessible only inside the function where it is declared, whereas global scope means a variable is accessible throughout the program.

//[b]
function displayage11(){
    let age11=20;
    console.log(age11)
}
console.log(age11);
displayage11()

//ReferenceError: age11 is not defined


let course11="javascript"
function displaycourse11(){
    console.log(course11);
}
console.log(course11);
displaycourse11()


//Q12
function analyzeStudent12(name12,m1,m2,m3){
    let total11=m1+m2+m3;
    let average11=total11/3;
    return` The student name is ${name12} and the total marks are ${total11} and the average are ${average11}`
}
console.log(analyzeStudent12("praveen",12,23,34));
console.log(analyzeStudent12("Bishnoi",12,23,34))


Q13
//[a]
//A nested function is a function defined inside another function and can usually be accessed only within the outer function.

//[b]
function studentreport13(name13,m1,m2,m3){
    function total13(m1,m2,m3){
        return m1+m2+m3
    }
    return `The student name ${name13} and the total are the ${total13(m1,m2,m3)}`
}
console.log(studentreport13("Praveen ",10,20,30))


//Q14
function generateReport14(name14,m1,m2,m3){
    let total14=m1+m2+m3;
    let average14=total14/3;
    if (average14>=40){
        return "pass"
    }else{
        return "fail"
    }
}
console.log(generateReport14("praveen",34,55,42))

//Q15
//[1]
function sumOfThree15(a, b, c){
    return a+b+c;
}
console.log(sumOfThree15(1,2,3))

//[2]
function averageOfTwo15(x, y){
    return (x+y)/2
}
console.log(averageOfTwo15(1,2))

//[3]
function maxOfTwo13(a, b){
    if (a>b){
        return "a is maximum"
    } else if (a<b) {
        return "b is maximum"
        
    } else {
        return "equal"
    }

}
console.log(maxOfTwo13(12,23))

//[4]
function fullName13(first, last){
    return `${first} ${last}`

}
console.log(fullName13("Praveen","bishnoi"))


// Q16. Practical – Grade Calculator

const calculateGrade = function (percentage) {
    if (percentage >= 90) {
        return "A+";
    } else if (percentage >= 80) {
        return "A";
    } else if (percentage >= 70) {
        return "B";
    } else if (percentage >= 60) {
        return "C";
    } else if (percentage >= 40) {
        return "D";
    } else {
        return "F";
    }
};

console.log("95:", calculateGrade(95));
console.log("82:", calculateGrade(82));
console.log("67:", calculateGrade(67));
console.log("45:", calculateGrade(45));
console.log("32:", calculateGrade(32));


// Q17. Practical – Shopping Discount

function calculateFinalPrice(price, discountPercent) {
    return price - (price * discountPercent / 100);
}

console.log("\nQ17. Shopping Discount");
console.log("Final Price:", calculateFinalPrice(2500, 15));
console.log("Final Price:", calculateFinalPrice(1200, 10));


// Q18. Practical – Temperature Converter

const celsiusToFahrenheit = function (c) {
    return (c * 9 / 5) + 32;
};

const fahrenheitToCelsius = function (f) {
    return (f - 32) * 5 / 9;
};

console.log("\nQ18. Temperature Converter");
console.log("25°C to Fahrenheit:", celsiusToFahrenheit(25));
console.log("100°C to Fahrenheit:", celsiusToFahrenheit(100));
console.log("77°F to Celsius:", fahrenheitToCelsius(77));
console.log("32°F to Celsius:", fahrenheitToCelsius(32));


// Q19(a). Function Expression

// A function expression cannot normally be called before
// initialization because it is assigned to a variable using const or let.


// Q19(b). Nested Function

function calculateArea(length, width) {
    function getArea() {
        return length * width;
    }

    return getArea();
}

console.log("\nQ19(b). Nested Function");
console.log("Area:", calculateArea(10, 5));


// Q20. Challenge – Student Report

function processStudent(name, m1, m2, m3) {
    function calculateTotal() {
        return m1 + m2 + m3;
    }

    function calculateAverage() {
        return calculateTotal() / 3;
    }

    let total = calculateTotal();
    let average = calculateAverage();
    let result;

    if (m1 >= 40 && m2 >= 40 && m3 >= 40) {
        result = "Pass";
    } else {
        result = "Fail";
    }

    return "Student: " + name +
        "\nTotal: " + total +
        "\nAverage: " + average.toFixed(2) +
        "\nResult: " + result;
}

function compareAverages(avg1, avg2) {
    if (avg1 > avg2) {
        return "First average is higher";
    } else if (avg2 > avg1) {
        return "Second average is higher";
    } else {
        return "Both averages are equal";
    }
}


console.log(processStudent("Praveen", 85, 90, 78));
console.log();
console.log(processStudent("Rahul", 65, 72, 80));
console.log();
console.log(processStudent("Amit", 35, 45, 30));

console.log("\nAverage Comparison");
console.log(compareAverages(84.33, 72.33));
console.log(compareAverages(75, 75));