var students = ["Abu Hurairah", "Anas", "Bilal", "Zahid"]
// loops
// while, for, do while

// While loop syntax:
// while (Condition){
//      code
// }
// var i = 0

// while (i < students.length ){
//     console.log(students[i])
//     i++
// }



// console.log("Hello after while loop")


//  print 1st 10 integers
// var start = 0
// while (start<10){
//     console.log(start)
//     start++
// }



// print 1st 5 odd numbers

// var start = 1
// while (start<10){
//     console.log(start)
//     start = start + 2
// }

// print 1st 100 natural numbers from 100 to 1
// var start = 100
// while (start>0){
//     console.log(start)
//     start--
// }


// 1001, 992,983,974,965,956,947,938,929,9110


// [100 - 1]
// [1 - 100]

// var start = 1
// var start2 = 100
// while (start<=100){
//     console.log(`${start2}${start}`)
//     start++
//     start2--
// }


// var start = 1
// while (start<=10){
//     console.log(`2 x ${start} = ${2*start}`)
//     start++
// }


// var start=10;
// while(start>=1){
//     console.log(`${start} x 5 = ${start*5}`)
//     start=start-2
// }



// var myName = "Abu Hurairah"
// console.log(myName.concat(" is a good boy"))
// console.log(myName)

// 1 1 1 1 1
// 2 2 2 2 2
// 3 3 3 3 3
// 4 4 4 4 4
// 5 5 5 5 5


// var start = 1
// while (start<=5){
//     console.log(`${start} ${start} ${start} ${start} ${start}`)
//     start++
// }


// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

// *
// * *
// * * *
// * * * *
// * * * * *


// var start = 1
// while (start<=5){
//     console.log(`${start} ${start} ${start} ${start} ${start}`)
//     start++
// }


// for(var start = 1; start<=5; start++){
//     console.log(`${start} ${start} ${start} ${start} ${start}`)
// }



// do{

// }while(condition)

// do{
//     console.log("Hello")
// }while(false)



var nums = [1,2,3,4,5,6,7,8,9,10]
// var sum = 0
// for(var start = 0; start < nums.length; start++){
//     console.log(nums[start])
//     sum = sum + nums[start]
// }
// console.log(sum)
var nums2 = [-9,-5,78,54,56,32,-98,-100,45,32,-33,15]

for(var start = 0; start < nums2.length;){
    if(nums2[start]<0){
        nums2.splice(start,1)
    }else{
        start++
    }
}
console.log(nums2)







