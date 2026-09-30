const prompt = require("prompt-sync")();
// //switch Statement 
//1
let month = Number(prompt("enter an month"));
switch(month){
    case 1:
        console.log("31 days")
        break;
    case 2:
        console.log("28 days")
        break;
    case 3:
        console.log("31 days")
        break;
    case 4:
        console.log("30 days")
        break;
    case 5:
        console.log("31 days")
        break;
    case 6:
        console.log("30 days")
        break;
    case 7:
        console.log("31 days")
        break;
    case 8:
        console.log("31 days")
        break;
    case 9:
        console.log("30 days")
        break;
    case 10:
        console.log("31 days")
        break;
    case 11:
        console.log("30 days")
        break;
    case 12:
        console.log("31 days")
        break;
    default:
        console.log("Invalid enter month")
}

//2
let character = prompt("enter the voval");
switch(character){
    case "a":
        console.log("vowel")
        break;
    case "e":
        console.log("vowel")
        break;
    case "i":
        console.log("vowel")
        break;
    case "o":
        console.log("vowel")
        break;
    case "u":
        console.log("vowel")
        break;  
    case "A":
        console.log("vowel")
        break;
    case "E":
        console.log("vowel")
        break;
    case "I":
        console.log("vowel")
        break;
    case "O":
        console.log("vowel")
        break;
    case "U":
        console.log("vowel")
        break; 
    default:
        console.log("Enter character is consonant")       
}

//3
let season = Number(prompt("enter season choice:-"));
switch(season){
    case 1:
        console.log("Winter")
        break;
    case 2:
        console.log("Winter")
        break;    
    case 3:
        console.log("Summer")
        break;    
    case 4:
        console.log("Summer")
        break;
    default:
        console.log("Invalid season input")
}

//4
let marks = Number(prompt("enter your marks:-"));
switch(true){
    case marks>=75 && marks<=100:
        console.log("Distinction")
        break;
    case marks>=60 && marks<=74:
        console.log("1st class")
        break;
    case marks>=50 && marks<=59:
        console.log("2nd class")
        break;
    case marks>=35 && marks<=49:
        console.log("3rd class")
        break;
    case marks>=0 && marks<=34:
        console.log("Failed")
        break;
    default:
        console.log("please enter valid  marks ")
}

//5
let role =prompt("enter are you admin/user");
switch (role) {
    case "admin":
        let action = prompt("enter action create/edit/delete");
        switch (action) {
            case "create":
                console.log("admin  can allow tocreate");
                break;
            case "edit":
                console.log("admin can allow to  edit");
                break;
            case "delete":
                console.log("admin can allow to  delete");
                break;
            default:
                console.log("please enter valid type of action");
        }
        break;
    case "user":
        console.log("user have the Limited Access to do")
    default:
        console.log("Invalid input role")    
}

//6
let fruit = "mango";
switch (fruit) {
  case "apple":
    console.log("Apple is red");
    break;
  case "mango":
    console.log("Mango is yellow");
    break;
  case "banana":
    console.log("Banana is yellow");
    break;
  default:
    console.log("Unknown fruit");
}

//7
let value = prompt("enter data type 0/'0'/false/null/undefined");
switch (value) {
    case 0:
        console.log("Number zero");
        break;
    case "0":
        console.log("String zero");
        break;
    case false:
        console.log("Boolean false");
        break;
    case null:
        console.log("Null value");
        break;
    case undefined:
        console.log("Undefined value");
        break;
    default:
        console.log("Unknown value");
}

//Q8
let choice=prompt("enter your choice:-")
let num1=Number(prompt("enter first number:-"))
let num2=Number(prompt("enter second numbre:-"))
switch (choice){
    case "+":
        console.log("sum",num1+num2);
        break;
    case "-":
        console.log("subtraction",num1-num2);
        break;
    case "*":
        console.log("multiply",num1*num2);
        break;
    case "/":
        console.log("divide",num1/num2);
        break;
    case "%":
        console.log("modulus",num1%num2);
        break;
    case "**":
        console.log("power",num1**num2);
        break;
    case num2===0:
        console.log("zero division error enter another number");
        break;
    default:
        console.log("invalid input")

}



//Q9
let day=Number(prompt("enter an day"))
switch (true){
    case day>=1 &&day<=10:
        console.log("Beginning of the month");
        break;
    case day>=11 && day<=20:
        console.log("Middle of the month");
        break;
    case day>=21 && day<=31:
        console.log("End of the month");
        break;
    default:
        console.log("invalid date")
}


//Q10
let category = prompt("Enter category (veg / nonveg):");
let item;
let size;
let price = 0;

switch (category) {

    case "veg":
        item = prompt("Choose item (pizza / burger):");

        switch (item) {

            case "pizza":
                size = prompt("Choose size (half / full):");

                switch (size) {
                    case "half":
                        price = 120;
                        break;

                    case "full":
                        price = 220;
                        break;

                    default:
                        console.log("Invalid size");
                }
                break;

            case "burger":
                size = prompt("Choose size (half / full):");

                switch (size) {
                    case "half":
                        price = 80;
                        break;

                    case "full":
                        price = 150;
                        break;

                    default:
                        console.log("Invalid size");
                }
                break;

            default:
                console.log("Invalid veg item");
        }
        break;


    case "nonveg":
        item = prompt("Choose item (chicken / biryani):");

        switch (item) {

            case "chicken":
                size = prompt("Choose size (half / full):");

                switch (size) {
                    case "half":
                        price = 180;
                        break;

                    case "full":
                        price = 320;
                        break;

                    default:
                        console.log("Invalid size");
                }
                break;

            case "biryani":
                size = prompt("Choose size (half / full):");

                switch (size) {
                    case "half":
                        price = 150;
                        break;

                    case "full":
                        price = 280;
                        break;

                    default:
                        console.log("Invalid size");
                }
                break;

            default:
                console.log("Invalid nonveg item");
        }
        break;


    default:
        console.log("Invalid category");
}


if (price > 0) {
    console.log("----- ORDER SUMMARY -----");
    console.log("Category:", category);
    console.log("Item:", item);
    console.log("Size:", size);
    console.log("Price: ₹" + price);
}