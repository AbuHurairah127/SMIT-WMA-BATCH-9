// var students: string[] = ["Abu Hurairah","Anas","Bilal","Zahid",23]
// var students: (string | number )[] = ["Abu Hurairah","Anas","Bilal","Zahid",23]
// var students:(string & number)[] = ["Abu Hurairah"]
// Tuple
// var students:[string,(number|string),string]= [23,"Abu Hurairah","abuhurairah127@gmail.com"]

// students = ["Abu Hurairah",23,"abuhurairah127@gmail.com",23]
// students[0] = "Anas"



// var students = "Abu Hurairah"
// console.log(students.split("H"))
// var email = "stock/pre-order + seller1@gmail.com"
// var output = email.split("")
// console.log(output)
// console.log(output.join("*"))

// const function1 = (a:number,b:(a:number,b:number)=>void):void => {
//  console.log(a)
//  var num1 = 10
//  var num2 = 20
//  b(num1,num2)
// }


// const function2 = (a:number,b:number):void => {
//     console.log(a+b)
// }

// var number = 10
// function1(number,function2)



// var arr: number[] = [1, 2, 3, 4, 5, 7, 8, 10, 11, 15, 6, 2, 5, 1, 57]
// // [odd,even,odd,even,odd,odd,even,even.....]
// const function1 = (num: number, ind: number): number => {
//     return num * ind
// }
// var outputArr = arr.map(function1)
// console.log("🚀 ~ outputArr:", outputArr)
// var students = ["Abu Hurairah", "Anas", "Bilal", "Zahid"]

// const lengthFunction = (student:string):number => {
//     return student.length
// }

// const lengthFunction = (student: string) => {
//     if (student.length >= 5) {
//         return true
//     }

// }
// var outputArr2 = students.map(lengthFunction)
// console.log("🚀 ~ outputArr2:", outputArr2)


// var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (var x of arr2) {
//     console.log(x)
// }


// var arr3 = [9,78,55,88,88,77,45,12,21,23,52,52,45,55,5,55,55,74,48,89,56]


// const oddEven = (num:number):string => num % 2 ===0 ? "Even":"Odd"

// var outputArr3 = arr3.map(oddEven)
// console.log("🚀 ~ outputArr3:", outputArr3)

// var students = ["Abu Hurairah","Anas","Bilal","Zahid","Ali","Ahmed","Hamza","Hassan"]

// const abc = (student:string,ind:number) => {
    //     if (ind % 2 ===0){
        //         return student.length
        //     }
        // }
        
        // var studentsLength = students.map(abc)
        // console.log("🚀 ~ studentsLength:", studentsLength)
        
        
        
// var students = ["Abu Hurairah","Anas","Bilal","Zahid","Ali","Ahmed","Hamza","Hassan",""]
// const abc = (student:string,ind:number) => ind % 2 === 0 

// var studentsnew = students.filter(abc)
// console.log("🚀 ~ studentsnew:", studentsnew)


// var num = 20
// if (num % 2){
//     console.log("Even")
// }else{
    //     console.log("Odd")
// }



    // var students = ["Abu Hurairah","Anas","Bilal","Zahid","Ali","Ahmed","Hamza","Hassan",""]
    // const abc = (student:string) => {
    //     console.log(student)
    //     return student.length
    // }
    // var studentsnew = students.forEach(abc)
    // console.log("🚀 ~ studentsnew:", studentsnew)


    


    // var arr3 = [9,78,55,88,88,77,45,12,21,23,52,52,45,55,5,55,55,74,48,89,56]
    // var check = (num:number,ind:number):string => {
    //     function numEvenOdd(num:number):string{
    //         if(num % 2 ===0){
    //             return "even"
    //         }else{
    //             return "odd"
    //         }
    //     }
    //    if(ind % 2 ===0){
    //     return `${numEvenOdd(num)} num at even index`
    //    }else{
    //     return `${numEvenOdd(num)} num at odd index`
    //    }
    // }
    // var outputArr3 = arr3.map(check)
    // console.log("🚀 ~ outputArr3:", outputArr3)








