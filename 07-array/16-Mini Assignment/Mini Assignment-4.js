//16-D Mini Assignment 4: Temperature of the Week

const temperatures = [
    ["Monday", 32],
    ["Tuesday", 35],
    ["Wednesday", 30],
    ["Thursday", 28],
    ["Friday", 33],
    ["Saturday", 36],
    ["Sunday", 31]
];
let heigest=-Infinity
let heigetsTempDay=""
let lowest=Infinity
let lowestTempDay=""
let total=0;
for (let i=0;i<temperatures.length;i++){
    console.log(`${temperatures[i][0]} temperature is the ${temperatures[i][1]}`)
    if (temperatures[i][1]>heigest){
        heigest=temperatures[i][1]
        heigetsTempDay=temperatures[i][0]
    }
    if (temperatures[i][1]<lowest){
        lowest=temperatures[i][1]
        lowestTempDay=temperatures[i][0]
    }
    total+=temperatures[i][1]
    if (temperatures[i][1]>=35){
        console.log(`Heat Alert on ${temperatures[i][0]}`)

    }
}
let average=total/7;
console.log(`
    The heigest temperature of the week is ${heigest} on the day ${heigetsTempDay} 
    The lowest temerature of the week is ${lowest} on the day ${lowestTempDay}
    And the average temperature of the week is ${average}`)