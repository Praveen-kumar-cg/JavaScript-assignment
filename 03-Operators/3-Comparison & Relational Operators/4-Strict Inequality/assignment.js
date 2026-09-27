//4. Strict Inequality !==
//Q1
let id1="101";
let id2=101;
console.log(id1!==id2)                                      //true

//Q2
let booleanStatus=true;
let numricStatus=1;
console.log(booleanStatus!==numricStatus)                     //true

//Q3
let pass="abc123";
let confirmPass="abc124";
console.log(pass!==confirmPass)                              //true

//Q4
let serverData=null;
let localData=undefined;
console.log(serverData!==localData)                         //true

//Q5
let playerId1=10;
let playerId2=20;
console.log(playerId1!==playerId2)                            //true

//Q6
let a = 0;
let b = false;
console.log(a !== b);                                      //true

//Q7
let x = "";
let y = false;
console.log(x !== y);                                    //true

//Q8
let p = "0";
let q = 0; 
console.log(p !== q);                                      //true

//Q9
let m = null;
let n = undefined;
console.log(m !== n);                                   //true

//Q10
let val = NaN;
console.log(val !== val);                                //true


