const prompt = require("prompt-sync")();


//Q1. Print Numbers in Reverse
let i=10;
do{
    console.log(i);
    i--;
}while(i>0);

//Q2. Print Even Numbers
let i2=1;
do{
    if (i2%2==0){
        console.log(i2)

    }
    i2++
}while (i2<=20);


//Q3. Sum of Natural Numbers

let num3=Number(prompt("enter an number:-"))
let i3=1;
let sum3=0
do{
    sum3+=i3
    i3++

}while (i3<=num3);

console.log(sum3)


//Q4. Product of Digits
let num4=Number(prompt('enter an number:-'))
let product4=1
do{
    let digit4=num4%10
    product4=product4*digit4 
    num4=Math.floor(num4/10)
}while (num4>0);
console.log(product4)

//Q5. Find the First Digit
let num5=Number(prompt('enter an number:-'))
let lest=0;
while (num5>0) {
    let digit5=num5%10
    lest=digit5
    num5=Math.floor(num5/10)

}
console.log(lest)

//Q6. Calculate a Power
let num6=Number(prompt("enter an number:-"))
let expo6=Number(prompt("enter the exponention :--"))
let power=1;
do{
    power*=num6
    expo6--

}while(expo6>0);
console.log(power)

//Q7. Print Multiples with Conditions
let i7=1
do{
    if (i7%4==0 && i7%8!==0){
        console.log(i7)
    }
    i7++
}while (i7<=100);

//Q8. Check a Palindrome Number
let num8=Number(prompt('enter an number:-'))
let onum8=num8
let reverse8=0;
do{
    let digit8=num8%10
    reverse8=(reverse8*10)+digit8
    num8=Math.floor(num8/10)

}
while (num8>0);
if (onum8===reverse8){
    console.log("palindrome number:-")
}else{
    console.log("not an palindrome number:")
}


//Q9. Find the Greatest Common Divisor (GCD)
let a=Number(prompt("enter an number:-"))
let b=Number(prompt("enter an number:-"))

do {
    let remainder = a % b;
    a = b;
    b = remainder;
} while (b !== 0);

console.log(a);


//Q10. Convert Decimal to Binary

let n = 13;
let binary = "";

do {
    let remainder = n % 2;
    binary = remainder + binary;
    n = Math.floor(n / 2);
} while (n > 0);

console.log(binary);