//typeof Operator
//Part a:

// Q1
let name = "Rahul";
console.log(typeof name);                                           //string  

// Q2
let age = 25;
console.log(typeof age);                                                    //number

// Q3
let isStudent = true;
console.log(typeof isStudent);                                          //boolean

// Q4
let city;
console.log(typeof city);                                       //undefined

// Q5
console.log(typeof null);                                           //object


//Part b:

//Q6
console.log(typeof 42);                                             //numbere
console.log(typeof "Hello");                                //string
console.log(typeof true);                                           //boolean
console.log(typeof undefined);                                      //undefined

//Q7
console.log(typeof null);                                           //object
console.log(typeof {});                                                         //object
console.log(typeof []);                                             //object

//Q8
console.log(typeof NaN);                                           //number
console.log(typeof Infinity);                                       //number
console.log(typeof function(){});                                   //function

//Q9
let price = 99.99;
let message = "Welcome";
let isActive = false;
console.log(`the type of price is ${typeof price}| the type of massage is ${typeof message}|the type of is Active is ${typeof isActive}`)

//Q10
let value = null;                                                   
console.log(typeof value);                                      //object
console.log(typeof value === "object");                         //true

//Q11
console.log(typeof typeof 100);                               //string  
console.log(typeof typeof "Hi");                                                        //string
console.log(typeof typeof true);                                //string

//Q12
let a = 10;
let b = "10";
console.log(typeof a === typeof b);                             //false
console.log(typeof a == typeof b);                              //false

//Q13
console.log(typeof null === "object");                                          //true
console.log(typeof [] === "object");                                    //true
console.log(typeof {} === "object");                                        //true

//Q14
let x;
console.log(typeof x);                                  //undefined
x = null;
console.log(typeof x);                                          //object
x = 0;
console.log(typeof x);                                          //number

//Q15
console.log(typeof NaN === "number");                                   //true
console.log(typeof Infinity === "number");                                      //true
console.log(typeof (1 / 0));                                        //number