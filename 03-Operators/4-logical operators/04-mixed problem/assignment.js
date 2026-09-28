//4. Mixed Logical Operators (&&, ||, !)
//Q1
let isMember = true;
let isBanned = false;
let canEnter=isMember&&(!isBanned);
console.log("is can enter",canEnter)                                            //true

//Q2
let isStudent = true;
let isSenior = false;
let isBanned1 = true;
let canDiscount=(isStudent||isSenior)&&(!isBanned1);
console.log("is student can get discount",canDiscount)                              //false

//Q3
let nameGiven = true;
let emailGiven = false;
let phoneGiven = true;
let isValid=nameGiven&&(emailGiven||phoneGiven)                                         //true
console.log("form is valid",isValid)

//Q4
let isAdmin = true;
let hasToken = false;
let isSuspended = false;
let isAllowed=(isAdmin ||hasToken)&&(!isSuspended);
console.log("is user is allowed",isAllowed)                                                     //true

//Q5
let score = 1200;
let timeBonus = false ;
let extraLife = true;
let canOpen=score>1000&&(timeBonus||extraLife);
console.log("is the level open",canOpen)                                                        //true

//Q6
let a = 0;
let b = 10;
let c = 20;
let result = a || b && c;
console.log(result);                                                            //20

//Q7
let p = true;
let q = false;
let r = true;
let result1 = p && q || r;
console.log(result1);                                                                           //true

//Q8
let x = 10;
let y = 20;
let result2 = !(x && y) || (x > 5 && y < 30) && true;
console.log(result2);                                                                       //true

//Q9
let d = 5;
let e = 0;
let f = 10;
let result3 = d && e || f;
console.log(result3);                                                   //10

//Q10
let val1 = false;
let val2 = true;
let val3 = false;
let result4 = !(val1 || val2) && val3 || true;
console.log(result4);                                                               //true