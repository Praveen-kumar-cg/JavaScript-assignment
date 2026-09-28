//3. Logical NOT !

//Q1
let isBanned = false;
let canLogin=!isBanned;
console.log(canLogin)                                                   //true

//Q2
let isCompleted = false;
let isPending=!isCompleted;
console.log("is ths assignment incompleted",isPending)                                  //true

//Q3
let isOn = true;
let isOff=!isOn;
console.log("is the light is off",isOff)

//Q4
let isActive = false;
let notAccess=!isActive;
console.log("is user have not access to use primium",notAccess)                                 //true

//Q5
let isReadOnly = false;
let canEdit=!isReadOnly;
console.log("is user can edit",canEdit)                                                                         //true

//Q6
let a = 0;
let b = 1;
console.log(!a, !b);                                                    //true,false

//Q7
let x = "Hello";
let y = "";
console.log(!x, !y);                                                    //false,true

//Q8
let val = 5;
let result = !val;
console.log(result);                                                    //false

//Q9
let c = 10;
let d = 20;
let result1 = !(c && d);
console.log(result1);                                                           //false

//Q10
let e = 0;
let f = 1;
let result2 = !(e || f);                                                        //false
console.log(result2);
