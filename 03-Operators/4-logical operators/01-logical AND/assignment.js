// 1. Username and Password
let storedUsername = "admin";
let storedPassword = 1234;
let username = "admin";
let password = 1234;
console.log(username === storedUsername && password === storedPassword);                                   // true

// 2. Page Access
let isLoggedIn = true;
let hasPermission = true;
console.log(isLoggedIn && hasPermission);                                                                    // true


// 3. Product Purchase
let inStock = true;
let price = 800;
console.log(inStock && price < 1000);                                                                        // true

// 4. Student Passing
let marks = 75;
let attendance = 80;
console.log(marks > 65 && attendance > 70);                                                                     // true

// 5. Party Condition
let isWeekend = true;
let isHoliday = false;
console.log(isWeekend && isHoliday);                                                                            // false

//Q6
let a = 0;
let b = 10;
let result = a && b;
console.log(result);                                                     //0

//Q7
let x = 5;
let y = 10;
let result1 = (x > 3 && y) || 0;
console.log(result1);                                                           //10

//Q8
let p = "Hello";
let q = "";
let r = "World";
let result2 = p && q && r;
console.log(result2);                                                           //""

//Q9
let val = 5;
let condition = val && (val = 0);
console.log(condition);                                                                 //0
console.log(val);                                                                       //0

//Q10
let w = 10;
let z = 20;
let result3 = (w && z) && (w > z);
console.log(result3);                                                               //false