//Q1
var city = "Surat";
function display() {
    var country = "India";
    console.log(city);
    console.log(country);
}
display();

//output
//surat
//india

//ans
//1>City
//2>country
//2>yes


//Q2
var price = 500;
function calculate() {
    var tax = 50;
    console.log(price + tax);
}
calculate();
console.log(price);

//output
//550
//500



//Q3
var college = "ABC College";
function student() {
    var name = "Rahul";
    var age = 20;
}
function teacher() {
    var subject = "JavaScript";
}

//ans
//college=global
//name=functional-scoped
//age=functional-scoped
//subject=functional-scoped


//Q4
function first() {
    var number = 100;
}
function second() {
    console.log(number);
}
first();
second();

//it raise the error because the numbr that are we printing in the second are the not defined forr the second function,it only for the first function


// Q5
let globalVar1 = "this is an a global variable";
function showVariables() {
    let localVar = "I am a local variable";
    console.log(globalVar1);
    console.log(localVar);
}
showVariables();
console.log(globalVar1);


// Q6
var game = "Cricket";
function play() {
    console.log("I like " + game);
}
play();
console.log(game);

// Output
// I like Cricket  Cricket

// Q7
var language = "English";
function showLanguage() {
    console.log(language);
}
function changeLanguage() {
    language = "Gujarati";
    // This function changes the global variable to functional "Gujarati" because it assigns a new value to language without declaring a new local variable.
}
showLanguage();
changeLanguage();
showLanguage();
console.log(language);
// Both functions access the same global variable.
// When changeLanguage() updates language, the change persists, so subsequent reads return "Gujarati" instead of "English".

// Q8
function displayMarks() {
    console.log(marks);
}
var marks = 75;
displayMarks();
// the function is called after the variable marks has been assigned a value.
// In JavaScript, a function can access global variables declared outside it. Since displayMarks() is called after marks is assigned the value 75, the code executes without an error.
// Why? JavaScript's var declaration is hoisted to the top of its scope. The declaration is available before its assignment, but its initial value is undefined.



// Q9
var color = "Red";
function showColor() {
    var message = "Favorite color: ";
    console.log(message + color);
}
showColor();
console.log(color);
console.log(message);// ReferenceError: message is not defined because message variable define inside function that is functional scope variable .
// functional scope variable do not execute or not accessible outside function.



// Q10
var school = "Sunrise School";
function showSchool(){
    console.log(school)
}
function updateSchool(){
    school="Green Valley School"
}
showSchool();
updateSchool();
showSchool();
console.log(school);


//Q11
function calculateTotal() {
    var first = 100;
    var second = 200;
    console.log(first + second);
}
calculateTotal();
console.log(first);

//the raise the ReferenceError: first is not defined,because the first is the functional scoped

//Q12
function employee() {
    var salary = 30000;
}
employee();
console.log(salary);
//the raise the ReferenceError: salary is not defined,because the first is the functional scoped


//Q13
var number = 15;
function test() {
    var number = 25;
    console.log(number);
}
test();
console.log(number);

//output
//25
//15

//it become the shadow variable the variable change the value to the inside value


//Q14
function calculate() {
    var result = 40;
    result = result + 10;
    console.log(result);
}
calculate();
calculate();

//1>50
//50
//2>yes
//3>no the local varoible cant accecble outside the function


//Q15
function calculateArea(){
    let length=8;
    let width=4;
    return length*width
}
console.log(calculateArea())


//Q16
if (10 > 5) {
    var result = "Success";
}
console.log(result);

//Output==>Success

//The variable result is accessible outside the if block because it is declared using var, which is function-scoped, not block-scoped.


//Q17
var number = 1;
if (true) {
    var number = 2;
}
console.log(number);

// Output==>2


//If the if block had its own scope for the variable, you might expect the inner number to be separate, leaving the outer number unchanged at 1.


//Q18
var message = "Start";
{
    var message = "End";
}
console.log(message);

//// Output==>End

//No. A standalone block does not create a separate scope for var. The variable remains accessible outside the block.


//Q19
if (false) {
    var result = 100;
}
console.log(result);

// Output==>undefined

//yes becusse the code of the if is not exuceted thenn the i tcant get the variable form the hoisting,Hoisting makes the var declaration available, but it does not execute the assignment.


//Q20
if (false) {
    var secret = "Hidden";
}
console.log(secret);

//becease the var variable never get the run because the if consition is false 


//Q21
for (var number = 2; number <= 6; number += 2) {
    console.log(number);
}
console.log("Final:", number);

//// Output==>2 4 6 Final: 8

//due to the var keyword so that the var keyword can be accecible outside the function


//Q22
var count = 10;
for (var count = 1; count <= 3; count++) {
    console.log(count);
}
console.log("Count:", count);

//// Output==>1 2 3 Count: 4

//the count variable valude it get change to the functional code;


//Q23
var i = 5;
while (i > 2) {
    console.log(i);
    i--;
}
console.log("After loop:", i);

//Output==>5 4 3 After loop: 2

//yes becuse the i is the globaly assigned


//Q24
for (var item = 1; item <= 3; item++) {
    console.log("Item:", item);
}
console.log("Last item:", item);

//Output==>Item: 1
//Item: 2
//Item: 3
//Last item: 4

//no it cant aise the error because the var the functional scoped vaisable


//Q25
for (let step = 1; step <= 4; step++) {
    console.log(step);
}
console.log(step);

//we use the let keyworf instant of the var



//Q26
function calculate() {
    for (var number = 1; number <= 3; number++) {
        console.log(number * 10);
    }
    console.log("Final:", number);
}
calculate();

// Output==>10
// 20
// 30
// Final: 4
// var has function scope: A variable declared with var is accessible throughout the function in which it is declared.
// A for loop does not create a separate scope for var: Therefore, number remains accessible after the loop ends.


//Q27
function student() {
    for (var marks = 60; marks <= 80; marks += 10) {
        console.log(marks);
    }
    console.log(marks);
}
student();
console.log(marks);

// Output==>60
// 70
// 80
// 90

//it raise the ReferenceError: marks is not defined,because the marks have the bot the scope out ht efor loop it have only inside the for loop


//Q28
function test() {
    var value = 5;
    while (value < 8) {
        console.log(value);
        value++;
    }
    console.log("Final value:", value);
}
test();

// Output==>5
// 6
// 7

//3 time 


//Q29
function calculate() {
    for (var i = 1; i <= 2; i++) {
        console.log(i);
    }
}
console.log(i);
calculate();


//The error occurs at console.log(i) before calculate() is called.


//Q30
function printNumbers(){
    for (var i=1;i<=15;i++){
        console.log(i)
    }
    console.log("last",i)
}
printNumbers()

// Output==>
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// last 16


//Q31
console.log(score);
var score = 90;
console.log(score);


//due to the hoisting the js alrody declayer the variable not take the value 


//Q32
var a = 10;
function test() {
    console.log(a);
    var a = 20;
    console.log(a);
}
test();

//  Output==>
//undefine
//20

//Before executing the function, JavaScript processes the var a declaration inside test() as if it were declared at the top of the function.


//Q33
console.log(first);
console.log(second);
var first = 100;
var second = 200;
console.log(first);
console.log(second);

//first to console produce the undefined because the are written before the variable decleration,and due to hoisting the print the undefine


//Q34
function calculate() {
    console.log(total);
    var total = 50;
    console.log(total);
}
calculate();

function calculate() {
    var total = 50;
    console.log(total);

    console.log(total);
}
calculate();


//Q35
var price = 100;
function showPrice() {
    // console.log(price);
    var price = 500;
}
showPrice();
console.log(price);

//1>first console print the undefined because the var are defined after the console{undefined}
//2>the final console print the global var value{100}
//becausse the in the Hoisting moves the local variable declaration to the top of its function scope during JavaScript's preparation phase.


//Q36
sayHello();
function sayHello() {
    console.log("Hello from CodingGita");
}
//This works because of function hoisting in JavaScript.
// JavaScript processes function declarations before executing the code. Therefore, the function sayHello() can be called even before its declaration appears in the code.


//Q37
display();
function display() {
    console.log("Function is hoisted completely");
}

//in the function exprasion the hoistiong are the not work


//Q38
greet();
var greet = function() {
    console.log("Hi");
};
// //in the function exprasion the hoistiong are the not work so it cant get the greet function there so i traise the error their



//Q39
console.log(typeof myFunc);
function myFunc() {
    return "I am hoisted";
}
console.log(myFunc());

//output>>
// function
// I am hoisted


//Q40
let name12="prveen"
console.log(name1())
function name1(){
    return name12
}

//it work due to the hoisting that the js aolrady declayer the function before the fuction ecute


//Q41
var institute = "CodingGita";
function department() {
    var dept = "CSE";
    function batch() {
        var year = 2025;
        console.log(year);
        console.log(dept);
        console.log(institute);
    }
    batch();
}
department();

//output
//2025
//CSE
//CodingGita


//Q42
var globalVar = "I am global";
function outer() {
    var outerVar = "I am outer";
    function inner() {
        console.log(globalVar);
        console.log(outerVar);
        console.log(innerVar); // this line
    }
    inner();
}
outer();

//output
//I am global
//I am outer
//ReferenceError: innerVar is not defined in the inner function


//Q43
var a = 1;
function level1() {
    var b = 2;
    function level2() {
        var c = 3;
        function deep() {
            console.log(a, b, c);
        }
        deep();
    }
    level2();
}
level1();

//output
//a,b,c all variable are accecible to the deep



// Q44
var x = "global";
function first() {
    var x = "first";
    function second() {
        console.log(x);
    }
    second();
}
first();
console.log(x);

//output>>
// first  ,first the local get the shadow so it get the innervalue
// global,because of the global variable it print the global




// Q45
let x="praveen"
function cons_name(){
    let y="kumar"
    function cons_inner(){
        let z="bishnoi"
        function cons_deep(){
            console.log( x+" "+y+" "+z)
        }
        cons_deep()
    
    }
    cons_inner()
}
(cons_name())


// Q46
var score = 50;
function test() {
    var score = 90;
    console.log(score);
}
test();
console.log(score);

//output
//90
//50
//Variable shadowing happens when a variable declared in an inner scope has the same name as a variable in an outer scope. The inner variable hides the outer variable within its scope.



// Q47
var name = "Global Name";
function show() {
    var name = "Local Name";
    console.log(name);
}
show();
console.log(name);

//output
//lacal name
//global name
//No. They are separate variables because var name is declared inside the function.


// Q48
var value = 10;
function update() {
    value = 20;          // no var
    console.log(value);
}
update();
console.log(value);

//output
//20
//20
//Inside update(), value = 20 updates the global variable because var is not used.


// Q49
var color = "Blue";
function changeColor() {
    var color = "Red";
    console.log("Inside:", color);
}
changeColor();
console.log("Outside:", color);

//output
// Inside: Red
// Outside: Blue


// // Q50
var marks=70;
function st_marks(){
    var marks=95;
    return marks
}
console.log(st_marks())
console.log(marks)


// Q51
function outer() {
    var teacher = "Kartik Sir";
    function inner() {
        var student = "Jenil";
        console.log(student);
        console.log(teacher);
    }
    inner();
}
outer();
console.log(student);
console.log(teacher);
    

//output
//Jenil
//Kartik Sir
//no we can't access hem outside the function because they are the block sccoped to function


// Q52
function parent() {
    var a = "Parent";
    function child() {
        var b = "Child";
        function grandchild() {
            var c = "Grandchild";
            console.log(a);
            console.log(b);
            console.log(c);
        }
        grandchild();
    }
    child();
}
parent();

//output
// Parent
// Child
// Grandchild
//Inner functions can access variables from their outer scopes through the scope chain.

// Q53
function outer() {
    var secret = "Hidden";
    function inner() {
        console.log(secret);
    }
}
inner();
outer();

//inner() is called outside outer(), so JavaScript throws a ReferenceError.
//Function placement determines scope and accessibility.


// Q54
function createMessage() {
    var greeting = "Hello";
    function show() {
        console.log(greeting + " students");
    }
    return show;
}
var messageFunc = createMessage();
messageFunc();

//output
//Hello students
//This happens because of a closure: the inner function remembers variables from its outer scope even after the outer function finishes executing.


//Q55
function studentInfo(){
    let name="praveen"
    let course="cse"
    function display(){
        console.log(name,course)
    }
    display()
}
studentInfo()



// Q56
function test() {
    x = 100; // missing var
}
test();
console.log(x);

//Problem: x is assigned without var, let, or const, creating a global variable unintentionally.

//Side effect: It pollutes the global scope and may conflict with other variables.


// Q57
if (true) {
    var x = 20;
}
console.log(x);

//var is function-scoped, not block-scoped.
//The if block does not create a separate scope for var.
//Beginners often expect an error because they think variables declared inside {} are accessible only inside those braces.

// Q58
console.log(a);
var a = 10;

//Due to hoisting, the var a declaration moves to the top of its scope, but its assignment (= 10) does not.


// Q59
var x = 10;
var x = 20;
console.log(x);

//Yes, var allows redeclaring the same variable in the same scope.

// Q60
function calculate() {
    let total = 0;
    for (let i = 1; i <= 5; i++) {
        total = total + i;
    }
    console.log(total);
}
calculate();
console.log(total); // currently works, but should not