//Increment / Decrement Operators (++ / --)
//Part a:

//Q1
let counter=5;
counter++;
console.log(counter)

//Q2
let lives=3;
lives--;
console.log(lives)

//Q3
let score = 10;
score++;
console.log(score)

//Q4
let items = 8;
items--;
console.log(items)

//Q5
let count = 0;
count++
console.log(count)


//Part b:

//Q6
let x=5;
let y=x++;
console.log(x,y)                                                                   //6,5 because y get first value then x get incriment

//Q7
let a=5;
let b=++a;
console.log(a,b)                                                        //6,6

//Q8
let live=3;
let newn=live--;
console.log(live,newn)                                                          //2,3

//Q9
let attempts=0;
let currentAttempt=++attempts;
console.log(attempts,currentAttempt)                                                        //1,1

//Q10
let points=100;
points++
points--
console.log(points)                                                     //100


//Part c:

//Q11
let c = 10;
let w = c++;
let z = ++c;
console.log(c, w, z);                                                   //12,10,11

//Q12
let e = 5;
let f = e-- + ++e;
console.log(e, f);                                                      //5,10

//Q13
let m = 7;
let n = --m + m++;
console.log(m, n);                                                  //7,14

//Q14
let p = 3;
let q = p++ + ++p + p;
console.log(p, q);                                                  //5,13

//Q15
let val = 0;
val = val++ + ++val;
console.log(val);                                                                   //2