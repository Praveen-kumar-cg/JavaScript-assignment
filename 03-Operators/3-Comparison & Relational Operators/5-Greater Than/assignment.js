//5. Greater Than >
//Q1
let age=20;
let minimumAge=18;
let canVote=age>minimumAge;
console.log(`can user vote ${canVote}`)                             //true


//Q2
let totalPice=650;
let freeShipingLimit=500;
let isShipingFree=freeShipingLimit>totalPice
console.log(`Is shiping is apply ${isShipingFree}`)                    //false

//Q3
let playerScore=1200;
let requiredScore=1000;
let isLevelUnloked=playerScore>requiredScore;
console.log(`is the player level unloked ${isLevelUnloked}`)              //true


//Q4
let monthlyIncome=40000;
let minimumRequired=3000;
let isApproved=monthlyIncome>minimumRequired;
console.log(`is lone is approved to person ${isApproved}`)                       //true
    
//Q5
let stepsToday=11000;
let targetSteps=10000;
let targetExceeded=stepsToday>targetSteps;
console.log(`is the today target reached ${targetExceeded}`)                     //true

//Q6
let a = 5;
let b = 5;
console.log(a > b);                                                //false

//Q7
let x = "10";
let y = "2";
console.log(x > y);                                               //false

//Q8
let p = "5";
let q = 10;
console.log(p > q);                                             //false

//Q9
let m = null;
let n = 0;
console.log(m > n);                                         //false

//Q10
let val = undefined;
console.log(val > 0);                              //false