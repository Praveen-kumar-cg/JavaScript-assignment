//1. What Is an Array?
//Q1
//An array in JavaScript is a special variable that stores multiple values in a single variable.


//Q2
//Index — the position of a value inside an array. Indexing starts from 0 in JavaScript.


//Q3
//0 (zero) — JavaScript array indexing always starts at 0.


//Q4
// var numbers4 = [10, 20, 30, 40]
//index2=30


//Q5
//var numbers = [10, 20, 30, 40];
//40 index=3



//2. Creating Arrays
//Q1
// 1. Using square brackets (recommended)
// var students1 = ["Jenil", "Mahir", "Priyesha", "Yashvi"];

// 2. Using the Array constructor (less common)
// var marks1 = new Array(85, 90, 78);


//Q2
// 1. Using square brackets (recommended)
// var students2 = ["Jenil", "Mahir", "Priyesha", "Yashvi"];


//Q3
let students3=["Jenil","Mahir","Priyesha","Yashvi"]


//Q4
// let marks4=new Array(85,90,78)



//Q5
// new — used to instantiate an array with the Array constructor.



//3. Accessing Values in an Array
//Q1
//Use the index inside square brackets [] to access a specific array value.

//Q2
var students32 = ["Jenil", "Mahir", "Priyesha"];
console.log(students32[0]);

//output
//jenil


//Q3
//students[2] accesses the third element.

//Q4
//JavaScript returns undefined if the index does not exist, such as students[10].

//Q5
//console.log(colors[0]);



//4. Updating Values
//Q1
//Use the index to assign a new value.


//Q2
var marks42 = [80, 75, 90];
marks42[1]=95
console.log(marks42)

//Q3
//[ 80, 95, 90 ]

//Q4
//False

//Q5
// Yes. JavaScript allows it. Empty positions become empty slots, and the array’s length increases.




//5. Array Length
//Q1
//The built-in length property tells you how many items an array contains.


//Q2
var arr2 = [1, 2, 3, 4];
console.log(arr2.length)

//output
//4

//Q3
//Answer: 0

//Q4
//It helps count elements and control loops when accessing array items.

//Q5
//length is a property, so it does not require parentheses ().




// 6. Looping Through Arrays
//Q1
//Method 1: for loop
//Method 2: while loop

//Q2
//Answer: i < arr.length


//Q3
// The increment step i++ is placed after the array access statement inside the while loop.

//Q4
let students64=["praveen","kumar","bishnoi","rohit"]
for (let i=0;i<students64.length;i++){
    console.log(students64[i])
}


//Q5
//It accesses one extra index, returning undefined for the last iteration because valid indexes end at students.length - 1.
