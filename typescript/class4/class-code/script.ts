// Function
// function uniqueName(){
//     console.log("Abu Hurairah")
// }


// uniqueName()

// JS Syntax for writing function with parameters
// function fullName(firstName, lastName){
//     var fullName = firstName + " " + lastName
//     console.log(fullName)
// }

// function fullName(firstName:string, lastName:string){ // Parameter8
//     var fullName = firstName + " " + lastName
//     console.log(fullName)
// }
// fullName("Abu", "Hurairah") // Argument

// function add(num1:number, num2:number){
//     var sum = num1 + num2 
//     console.log(sum)
// }

// add(10,20)

// function daMas(num1:number, num2:number , num3:number , num4:number , num5:number){
//     var res= num1/num2;
//     res*=num3;
//     res+=num4;
//     res-=num5;
//     console.log(res)
// }

// daMas(10,20,30,40,50);




// function confirmPassword(cPassword:string,cNPassword:string){
//     if(cPassword === cNPassword){
//         console.log("Password is correct")
//        return true
//     }else{
//         console.log("Password is incorrect")
//         return false
//     }
// }
function confirmPassword(cPassword:string,cNPassword:string):boolean{
    if(cPassword === cNPassword){
        console.log("Password is correct")
       return true
    }else{
        console.log("Password is incorrect")
        return false
    }
}
console.log(confirmPassword("123456", "12456"),"This is the result of the function")
var result = confirmPassword("123456", "12456")
console.log(result)



if(result){
    console.log("Password is correct")
}else{
    console.log("Password is incorrect")
}






function sum1(num1:number, num2:number ):number{
    return num1 + num2
    console.log(num1 + num2)
}

var result1 = 20 + 30 - sum1(sum1(10,20),20) + "20"
console.log(result1)



function evenOdd(num:number):string{
    if(num % 2 === 0){
        return "Even"
    }
    return "Odd"
}

console.log(evenOdd(10))
console.log(evenOdd(11))