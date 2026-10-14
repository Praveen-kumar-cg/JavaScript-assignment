const prompt = require("prompt-sync")();
//Q1. Print Numbers
let i1=1;
while (i1<=10){
    console.log(i1)
    i1++
}

//Q2. Sum of Natural Numbers
let sum2=0;
let i2=1;
while (i2<=10){
    sum2+=i2
    i2++
}
console.log(sum2)

//Q3. Multiplication Table
let num3=Number(prompt("enter an nunber:-"))
let i3=1;
while (i3<=10){
    console.log(`${num3}X${i3}=${num3*i3}`)
    i3++

}

//Q4. Count the Digits
let num4=Number(prompt('enter an number:-'))
let count4=0;
while (num4>0) {
    let digit=num4%10
    count4++
    num4=Math.floor(num4/10)

}
console.log(count4)

//Q5. Reverse a Number
let num5=Number(prompt('enter an number:-'))
let reverse5=0;
while (num5>0) {
    let digit5=num5%10
    reverse5=(reverse5*10)+digit5
    num5=Math.floor(num5/10)

}
console.log(reverse5)

//Q6. Sum of Digits
let num6=Number(prompt('enter an number:-'))
let sum6=0
while (num6>0) {
    let digit6=num6%10
    sum6+=digit6
    num6=Math.floor(num6/10)

}
console.log(sum6)

//Q7. Print Numbers with Conditions
let i7=1;
while(i7<=100){
    if (i7%3==0 && i7%5==0 && i7%7!==0){
        console.log(i7)
    }
    i7++
}

//Q8. Calculate Factorial
let num8=Number(prompt("entern an number:-"))
let product8=1;
let i8=1
while (i8<=num8) {
    product8=product8*i8
    i8++


}
console.log(product8)

//Q9. Check a Palindrome Number
let num9=Number(prompt('enter an number:-'))
let onum9=num9
let reverse9=0;
while (num9>0) {
    let digit9=num9%10
    reverse9=(reverse9*10)+digit9
    num9=Math.floor(num9/10)

}
if (onum9===reverse9){
    console.log("palindrome number:-")
}else{
    console.log("not an palindrome number:")
}


//Q10. Convert Decimal to Binary
let n = Number(prompt("Enter a positive decimal integer:"));
let binary = "";
while (n > 0) {
    let remainder = n % 2;
    binary = remainder + binary;
    n = Math.floor(n / 2);
}
console.log(binary);