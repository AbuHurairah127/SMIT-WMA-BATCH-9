// comparison Operators
// == , === , <,>,<=,>=,!=,!==

// a = b

var num1:number = 20
var num2:number = 20

// var resp = num1 == num2 == for value check
// var resp = num1 === num2 === for value and type check
// console.log("🚀 ~ resp:", resp)


var resp = num1 !== num2
console.log("🚀 ~ resp:", resp)
console.log("🚀 ~ resp:", resp)
console.log("🚀 ~ resp:", resp)

// logical Operators

// && , || , !



var isAttendance = 68
var isAssignment = 70


var isPass = isAttendance >= 70 && isAssignment >= 70

// if (condition => true/ false){
//     // code 
// }



var age = 21
if(age>=18){
    console.log("You can vote")
}

var marks = 50
var totalMarks = 75

if((marks/totalMarks)*100 <= 70){
    console.log("You are passed",((marks/totalMarks)*100))
}



var num = 15
if(num%2 === 0){
    console.log("Even")
}

if(num%2 !== 0){
    console.log("Odd")
}


if(num%2 ===1){
    console.log("Odd")
}


// 90 -> A+
// 80 -> A
// 70 -> B
// 60 -> C
// 50 -> D
// < 50 -> F


var marks = 95

if(marks>=90&&marks<=100){
    console.log("A+ Grade")
}

if(marks>=80){
    console.log("A Grade")
}

if(marks>=70){
    console.log("B Grade")
}

if(marks>=60){
    console.log("C Grade")
}

if(marks>=50){
    console.log("D Grade")}

if(marks<50&&marks>=0){
    console.log("F Grade")
}

if(marks<0||marks>100){
    console.log("Invalid Marks")
}


// if(condition){
//     console.log("Condition is true")
// }else{
//     console.log("Condition is false")
// }

var percentage = 75

if(percentage>=70){
    console.log("You are passed")
}else{
    console.log("You are failed")
}


var marks2:number = 45
if(marks2>=50){
    console.log("Grade A")
}else if(marks2>=30){
    console.log("Grade C")
}else if(marks2>=40){
    console.log("Grade B")
}else    if(marks2>=20){
    console.log("Grade D")
}else  if(marks2>=10){
    console.log("Grade E")
}else{
    console.log("Grade F")
}





var units:number = 500

if(units>0&&units<=200){
    // price_per_unit
    // PricePerUnit
    // PRICE_PER_UNIT
    var pricePerUnit:number = 10
    var totalBill:number = units * pricePerUnit
    var tax:number = totalBill * 0.05
    var totalAmount:number = totalBill + tax
    console.log("Total Bill: ",totalAmount)
}else if(units>200&&units<=300){
    var units1 = units - 200
    var units2 = units - units1 // 254 - 200 = 54 -> 254 - 54 = 200
    var pricePerUnit2:number = 10
    var pricePerUnit1:number = 20
    var totalBill2:number = units2 * pricePerUnit2
    var totalBill1:number = units1 * pricePerUnit1
    var tax2:number = totalBill2 * 0.05
    var tax1:number = totalBill1 * 0.1
    var totalAmount2:number = totalBill2 + tax2
    var totalAmount1:number = totalBill1 + tax1
    var totalAmount:number = totalAmount2 + totalAmount1
    console.log("Total Bill: ",totalAmount)
}else if(units>300 && units<=400){
    // Tier 1: pehle 200 units -> 10/unit, 5% tax
    var tier1Units:number = 200
    var totalBill1:number = tier1Units * 10
    var tax1:number = totalBill1 * 0.05
    var totalAmount1:number = totalBill1 + tax1

    // Tier 2: 200 se 300 tak (100 units) -> 20/unit, 10% tax
    var tier2Units:number = 100
    var totalBill2:number = tier2Units * 20
    var tax2:number = totalBill2 * 0.1
    var totalAmount2:number = totalBill2 + tax2

    // Tier 3: 300 se 400 tak -> 30/unit, 30% tax
    var tier3Units:number = units - 300
    var totalBill3:number = tier3Units * 30
    var tax3:number = totalBill3 * 0.3
    var totalAmount3:number = totalBill3 + tax3

    var totalAmount:number = totalAmount1 + totalAmount2 + totalAmount3
    console.log("Total Bill: ", totalAmount)
}else if(units>400){
    // Tier 1: pehle 200 units -> 10/unit, 5% tax
    var tier1Units:number = 200
    var totalBill1:number = tier1Units * 10
    var tax1:number = totalBill1 * 0.05
    var totalAmount1:number = totalBill1 + tax1

    // Tier 2: 200 se 300 tak (100 units) -> 20/unit, 10% tax
    var tier2Units:number = 100
    var totalBill2:number = tier2Units * 20
    var tax2:number = totalBill2 * 0.1
    var totalAmount2:number = totalBill2 + tax2

    // Tier 3: 300 se 400 tak (100 units) -> 30/unit, 30% tax
    var tier3Units:number = 100
    var totalBill3:number = tier3Units * 30
    var tax3:number = totalBill3 * 0.3
    var totalAmount3:number = totalBill3 + tax3

    // Tier 4: 400 se zyada -> 40/unit, 30% tax
    var tier4Units:number = units - 400
    var totalBill4:number = tier4Units * 40
    var tax4:number = totalBill4 * 0.3
    var totalAmount4:number = totalBill4 + tax4

    var totalAmount:number = totalAmount1 + totalAmount2 + totalAmount3 + totalAmount4
    console.log("Total Bill: ", totalAmount)
}



var str1:string = "Hello"
var str2:string = "Hello"
var resp2 = str1 == str2
console.log("🚀 ~ resp2:", resp2)






var emailInDB:string = "test@gmail.com"
var passwordInDB:string = "123456"
var email:string = "test@gmail.com"
var password:string = "123456"


if(emailInDB === email && passwordInDB === password){
    console.log("Login successful")
}else if(emailInDB!==email){
    console.log("Email is incorrect")
}else if(passwordInDB!==password){
    console.log("Password is incorrect")
}else{
    console.log("Login failed")
}