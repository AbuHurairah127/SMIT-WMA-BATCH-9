// sum2()

// function sum2(){
//     console.log(10 + 20)
// }



var printing = () => {
    console.log("Hello World")
}

printing()

const addition = (num1:number, num2: number)=>{
    console.log(num1 + num2)
    return num1 + num2
}

var resp = addition(100,2000)
console.log("🚀 ~ resp:", resp)





addition(10,20)
addition(50,70)

// Syntax

// const name = (param: DataType)=>{
//  code
// }

// Lambda Functions
const add3 = (num1:number,num2:number,num3:number) => num1 + num2 + num3


console.log(add3(10,20,30))



var myName:string = "Abu Hurairah"
console.log(myName)
console.log(myName,myName.toLowerCase())
console.log(myName,myName.toUpperCase().trim())
console.log(myName,myName.trim())
console.log(myName,myName.trimStart())
console.log(myName,myName.trimEnd())
console.log(myName,myName.replace("a","z"))
console.log(myName,myName.replaceAll("a","z"))
// console.log(myName,myName.replaceAll("A","z"))
console.log(myName.includes("a"))
console.log(myName.indexOf("a"))
console.log(myName.lastIndexOf("a"))
console.log(myName.length)