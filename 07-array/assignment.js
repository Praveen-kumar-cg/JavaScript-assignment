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


//Q6
let ssubjects66=["python","css","javascript","html"]
for (let subject of ssubjects66){
    console.log(subject)
}


//Q7
//The main advantage is that for...of is simpler and easier to read because it directly accesses each value without needing an index variable or subject[i].

//Q8
const colors = ["Red", "Blue", "Green"];
for (const color of colors) {
    console.log(color,indexOf(color));
}
// ReferenceError: indexOf is not defined



//# 7. Adding Elements to Arrays

//Q1
//push() → Add at the end
//unshift() → Add at the beginning

//Q2
//unshift() → Add at the beginning

//Q3
let nums73 = [1, 2, 3];
nums73.push(4);
console.log(nums73)


//Q4
let nums74 = [1, 2, 3];
nums74.push(4);
console.log(nums74);
nums74.unshift(0);
console.log(nums74)

//Q5
//True or False: push() and unshift() both modify the original array (they are mutating methods).


//# 8. Removing Elements

//Q1
//pop() → Remove last


Q2
// shift() → Remove first


//Q3
let nums83 = [100, 200, 300, 400, 500];
nums83.pop();
console.log(nums83)

//nums.pop() removes the last element, 500.


//Q4
let nums84 = [100, 200, 300, 400, 500];
nums83.pop();
console.log(nums84)
nums83.shift();
console.log(nums84)

//nums.shift() removes the first element, 100.

//Q5
//Both pop() and shift() return the removed element and modify the original array.


//# 9. Searching in Arrays
//Q1
//It returns the index (position) of the first matching element.

//Q2
//It returns `-1` when the value is not found.

//Q3
const names = ["Jenil", "Mahir", "Arjun"];
console.log(names.indexOf("Mahir"));

//output>>
// 1


//Q4
const names94 = ["Jenil", "Mahir", "Arjun"];
console.log(names94.indexOf("Krishna"));
//Output: -1 (because "Krishna" is not in the array).

//Q5
console.log(students.indexOf("Priyesha"));




//# 10. Array with Different Data Types

//Q1
// Yes. JavaScript arrays can store different data types in the same array.

//Q2
let data=[12,"praveen",true,null];

//Q3
console.log(typeof data[0]);
console.log(typeof data[1]);
console.log(typeof data[2]);
console.log(typeof data[3]); 

//Q4
const data4 = [100, "Hello", true, null];
console.log(typeof data4[0])

//output>number


//Q5
const data5 = [100, "Hello", true, null];
console.log(typeof data5[2]);

//output>>boolean



//# 11. Array of Arrays (Matrix) – 2D Arrays
//Q1
//A 2D array is commonly used to store data in rows and columns, like a matrix or table.

//Q2
const matrix2 = [
    [1, 2],
    [3, 4],
    [5, 6]
];
console.log(matrix2[2][1])

//output>>
//6


//Q3
const matrix3 = [
    [100, 200,700],
    [300, 400,800],
    [500, 600,900]
];
console.log(matrix3[1][2])


//Q4
const matrix4 = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];
console.log(matrix4[2][2])


//Q5
let matrix5=[
    [1,2,3],
    [4,5,6]
]
matrix5[1][1]=100
console.log(matrix5)
