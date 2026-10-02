const prompt = require("prompt-sync")();
//Q1
let num=Number(prompt("enter an number:-"))
console.log(num%7==0?"Divisible by 7":"Not divisible by 7")

//Q2
let temp=Number(prompt("enter the temperature:-"))
console.log(temp>=30?"Hot day":"Pleasant day")

//Q3
let str=prompt("enter an empty string:-")
console.log(str==""?"empty string":"string has data")

//Q4
let age=Number(prompt("enter your age:-"))
console.log(age<13?"Child":age>=13&&age<=19?"Teenager":"Adult")

//Q5
let a=Number(prompt("enter first number:-"))
let b=Number(prompt("enter second number:-"))
let c=Number(prompt("enter third number:-"))
console.log(a>b && a>c?"A is greater":b>a && b>c?"B is greater":c>a &&c>b?"C is greater":"all are equal")

//Q6
let marks=Number(prompt("enter your marks:-"))
console.log(marks>=75?"Distinction":marks>=60 && marks<=74?"First class":marks>=50 && marks<=59?"Second Class":marks>=35 && marks<=49?"Pass":"fail")

//Q7
let num1=Number(prompt("enter an number:-"))
console.log(num1>0 && num1%2==0?"Positive even":num1>0 && num1%2!=0?"Positive odd":num1<0 && num1%2==0?"Negative even":num1<0 && num1%2!=0?"Negative odd":"zero")

//Q8
let year=Number(prompt("enter an year:--"))
console.log(year%4==0 &&(year%100!=0 || year%400==0)?"Leap year":"Not an leap year")

//Q9
let role=prompt("enter your role/either Use or admin>>>>>")
let action=prompt("enter your action:-")
let design=(role==="Admin"?action==="delete"?"Admin can delete":action==="edit"?"admin acn edit":"admin can other":role==="user"?action==="view"?"user can view":"user restricted":"invalid role")
console.log(design)

//10
let price = 5000;
let finalPrice = 0;
let getDiscount= (price>=5000)? "20% discount":(price>=2000)? "10% discount":(price>=1000)?"5% discount":"0% discount";
finalPrice=price>=5000 ? price-price*0.2:price>=2000 ? price-price*0.1:price>=1000 ? price-price*0.05:price;
console.log(`You get ${getDiscount} and final payble amount is ${finalPrice}`)