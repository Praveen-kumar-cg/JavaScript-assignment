const prompt = require("prompt-sync")();


Q1

let a=1;
for (let i=1;i<=4;i++){
    let bag=""
    for (let j=1;j<i+1;j++){
        bag+=a+" "
        // console.log(bag);
        a+=1
    }
    console.log(bag);
    // console.log()
}


//Q2
for (let i=0;i<5;i++){
    let bag1=""
    for (let j=0;j<i+1;j++){
        bag1+=String.fromCharCode(65+j)+" "
        
    }
    console.log(bag1)    
}


//Q3
let num=Number(prompt("enter an numebr:-"))
for (let i=0;i<num;i++){
    let bag2="";
    for (j=0;j<i+1;j++){
        if (j===0 ||j===i  || i==num-1){
            bag2+=("*"+" ")
        }
        else{
            bag2+="  "
        }
    }
    console.log(bag2)
}


//Q4
let num2=Number(prompt("enter an number:-"))
for (let i=0;i<num2;i++){
    let bag3=""
    for(let j=num2;j>i;j--){
        bag3+="*"

    }
    console.log(bag3)
}


//Q5
let num5=Number(prompt("enter an number:-"))
for (let i=0;i<num5;i++){
    let bag5=""
    for(let j=num5;j>i;j--){
        bag5+=(num5-i)+" "

    }
    console.log(bag5)
}



//Q6
let num6=Number(prompt("enter an number:-"))
for (let i=num6;i>0;i--){
    let bag5=""
    for(let j=1;j<i+1;j++){
        bag5+=j+" "

    }
    console.log(bag5)
}


//Q7
let num7=15;
for (let i=5;i>0;i--){
    let bag6=""
    for (let j=1;j<=i;j++){
        bag6+=num7+" "
        num7-=1

    }
    console.log(bag6)
}

//Q8
let num8=Number(prompt("enter an number:-"))
for (let i=0;i<num8;i++){
    let bag7="";
    for (let j=num8-1;j>=0;j--){
        if (i===0 ||j===num8-1||j===i){
            bag7+="*"+" "
        }else{
            bag7+="  "
        }
    }
    console.log(bag7)
}


//Q9
for (let i=0;i<5;i++){
    let bag9="";
    for (let j=0;j<5;j++){
        if (i==j){
            bag9+="  "
        }else{
            bag9+="*"+" "
        }
    }
    console.log(bag9)
}


//Q10
for (let i=1;i<=5;i++){
    let bag10="";
    for (let j=1;j<=10;j++){
        let product=i*j
        if (product%2==0){
            bag10+=product+" "
        }
    }
    console.log(bag10)
}


//Q11
//dought rgards to matrix

//Q12
//matrix question

//Q13
for (let i=1;i<=5;i++){
    let bag13="";
    for (let k=5;k>=i;k--){
        bag13+=" "
    }
    for (let j=1;j<i+1;j++){
        bag13+=j
    }
    if (i>=2){
        for (let l=i;l>i-1;l--){
        bag13+=l

    }

    }
    
    console.log(bag13)
}