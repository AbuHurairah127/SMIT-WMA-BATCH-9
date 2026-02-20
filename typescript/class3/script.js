// comparison Operators
// == , === , <,>,<=,>=,!=,!==
// a = b
var num1 = 20;
var num2 = 20;
// var resp = num1 == num2 == for value check
// var resp = num1 === num2 === for value and type check
// console.log("🚀 ~ resp:", resp)
var resp = num1 !== num2;
console.log("🚀 ~ resp:", resp);
// logical Operators
// && , || , !
var isAttendance = 68;
var isAssignment = 70;
var isPass = isAttendance >= 70 && isAssignment >= 70;
// if (condition => true/ false){
//     // code 
// }
var age = 21;
if (age >= 18) {
    console.log("You can vote");
}
var marks = 50;
var totalMarks = 75;
if ((marks / totalMarks) * 100 <= 70) {
    console.log("You are passed", ((marks / totalMarks) * 100));
}
var num = 15;
if (num % 2 === 0) {
    console.log("Even");
}
if (num % 2 !== 0) {
    console.log("Odd");
}
if (num % 2 === 1) {
    console.log("Odd");
}
// 90 -> A+
// 80 -> A
// 70 -> B
// 60 -> C
// 50 -> D
// < 50 -> F
var marks = -90;
if (marks >= 90 && marks <= 100) {
    console.log("A+ Grade");
}
if (marks >= 80 && marks < 90) {
    console.log("A Grade");
}
if (marks >= 70 && marks < 80) {
    console.log("B Grade");
}
if (marks >= 60 && marks < 70) {
    console.log("C Grade");
}
if (marks >= 50 && marks < 60) {
    console.log("D Grade");
}
if (marks < 50 && marks >= 0) {
    console.log("F Grade");
}
if (marks < 0 || marks > 100) {
    console.log("Invalid Marks");
}
