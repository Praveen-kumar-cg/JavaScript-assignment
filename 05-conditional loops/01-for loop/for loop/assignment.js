const prompt = require("prompt-sync")();

//Q1
let arr=[28,32,25,40,18,35];
let count=0;
for (i=0;i<=arr.length-1;i++){
    if (arr[i]>30){
        count+=1
    }
    
}
console.log(`the count is ${count}`)

//Q2
let num=Number(prompt("enter an number:-"))
let sum=0;
for (let i = num; i > 0; i = Math.floor(i / 10)) {
    sum += i % 10;
}

console.log("Sum of digits:", sum);

//Q3
for (let i=1;i<=100;i++){
    if (i%3===0 && i%5===0 && i%7!==0){
        console.log(i);
    }
}

//Q4
let string = "JavaScript";
let rstring = "";
for(let i=0;i<string.length;i++){
    if (string[i]=="a" && string[i]=="e" && string[i]=="i" && string[i]=="o" && string[i]=="u" && string[i]=="A" && string[i]=="E" && string[i]=="I" && string[i]=="O" && string[i]=="U"){
        rstring+=""
    }else{
        rstring+=string[i]
    }
}
console.log(rstring)

//Q5
let arr1 = [10, 5, 20, 8, 15];
let max = arr[0];
let second = arr1[0];
for (let i = 1; i < arr1.length; i++) {
    if (arr1[i] > max) {
        second = max;
        max = arr1[i];
    }
    else if (arr1[i] > second && arr1[i] < max) {
        second = arr1[i];
    }
}
console.log(second);


//Q6
let num2=Number(prompt("enter an number:-"));
let sum1=0;
for (let i=1;i<num2;i++){
    if(num2%i==0){
        sum1+=i
    }
}
if (sum1==num2){
    console.log("perfect number:")
} else{
    console.log("not pefect number:-")
}



//Q7
let bag=" ";
let total=2;
for (let i=0;i<=8;i++){
    total=2**i
    console.log(total)
    bag=bag+total+" "

}
console.log(bag);


//Q8
let bag1="0,1 ";
let first=0;
let second1=1;
for (let i=1;i<=20;i++){
    let third=first+second1;
    bag1=bag1+third+" "
    first=second1;
    second1=third;
}
console.log(bag1)


//Q9
let arr4=[45, 78, 90, 32, 56, 88];
let total1=0;
let count1=0;

for (let i=0;i<arr4.length;i++){
    total1=total1+arr4[i]

}
let average=total1/arr4.length
for (let j=0;j<arr4.length;j++){
    if (arr4[j]>average){
        count1+=1
    }
}
console.log("the average is ",average);
console.log("the count is ",count1)

//Q10
let n = 10;
let binary = "";

for (; n > 0; n = Math.floor(n / 2)) {
    binary = (n % 2) + binary;
}
console.log(binary);