//Q1
const numbers = [12, 7, 18, 25, 4, 9, 30];
for (number of numbers){
    if (number%2==0){
        console.log(number)
    }
    
}


//Q2
const cities = ["Ahmedabad", "Surat", "Rajkot", "Vadodara", "Bhavnagar"];
for (let i=cities.length-1;i>=0;i--){
    console.log(cities)
}


//Q3
const scores = [12, 45, 7, 89,88,90, 23];
let largest=-Infinity;
let secondlarget=-Infinity;
for (let score of scores){
    if (score>largest){
        secondlarget=largest
        largest=score;
    }
    if (score>secondlarget && score<largest){
        secondlarget=score
    }
}
console.log(largest,secondlarget)


//Q4
const colors = ["Red", "Blue", "Green", "Yellow"];
colors.push("purple")
colors.unshift("black")
console.log(colors)


//Q5
let sum=0;
const matrix = [
    [10, 20, 30],
    [40, 50, 60]
];

for (let i=0;i<matrix.length;i++){
    for (let j=0;j<matrix[0].length;j++){
        sum=sum+matrix[i][j]
    }
}
console.log(sum)


//Q6
const marks = [45, 67, 89, 32, 76, 91, 54];
let count=0;
for (let mark of marks){
    if (mark>50){
        count++
    }

}
console.log(`the number of the marks more then 50 is ${count}`)


//Q7
const matrix7 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i=0;i<matrix7.length;i++){
    for (let j=0;j<matrix7[0].length;j++){
        if (i==j){
            console.log(matrix7[i][j])
        }
    }
}


