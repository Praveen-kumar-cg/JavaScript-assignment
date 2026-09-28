// 1. Login allowed
let passwordCorrect = true;
let otpValid = false;
console.log(passwordCorrect || otpValid);                                                       // true


// 2. Discount applies
let isMember = false;
let hasCoupon = true;
console.log(isMember || hasCoupon);                                                             // true


// 3. Entry allowed
let age = 16;
let height = 155;
console.log(age > 18 || height > 150);                                                          // true


// 4. Form is valid
let emailGiven = true;
let phoneGiven = false;
console.log(emailGiven || phoneGiven);                                                          // true


// 5. Game level opens
let score = 900;
let timeBonus = true;
console.log(score > 1000 || timeBonus);                                                         // true

//Q6
let a = 0;
let b = false;
let c = "";
let d = null;
let e = 42;
let result = a || b || c || d || e;
console.log(result);                                                                              //42

//Q7
let x = "Hello" || 0;
let y = 0 || "Hi";
console.log(x, y);                                                                      //"hello","hi"

//Q8
let f = 10;
let g = 20;
let result1 = (f < 5) || (g > 15);
console.log(result1);                                                                       //true

//Q9
let val = 5;
let condition = val || (val = 0);
console.log(condition);                                                                                 //5
console.log(val);                                                                                       //5                                   

//Q10
let h = "" || 0 || false || null || undefined || "OK";
console.log(h);                                                                             //"ok"