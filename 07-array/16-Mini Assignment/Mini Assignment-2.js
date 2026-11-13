// 16-B Mini Assignment 2: Classroom Attendance Tracker

const attendance = [
    ["Jenil", ["P", "P", "A", "P", "P"]],
    ["Mahir", ["P", "A", "P", "P", "A"]],
    ["Yashvi", ["P", "P", "P", "P", "P"]],
    ["Arjun", ["A", "A", "P", "P", "A"]]
];
let heigest=-Infinity;
let nameOfStudent=""
for (let i=0;i<attendance.length;i++){
    let present=0;
    let abesnt=0;
    
    for (let j=0;j<attendance[0][1].length;j++){
        if (attendance[i][1][j]==="P"){
            present++
        }else{
            abesnt++
        }
    }
    let attendancepercent=((present)*100)/(present+abesnt);
    let status=""
    if (attendancepercent>=75){
        status="Best"
    }else{
        status="low Attendance"
    }
    if (attendancepercent>heigest){
        heigest=attendancepercent
        nameOfStudent=attendance[i][0]
    }
    console.log(`
        Name:${attendance[i][0]}
        Present:${present}
        Absent:${abesnt}
        Attendance:${attendancepercent}%
        Status:${status}`)

}
console.log(`The student with the heigest aattendance in th class is the ${nameOfStudent} and the attdence is ${heigest}`)