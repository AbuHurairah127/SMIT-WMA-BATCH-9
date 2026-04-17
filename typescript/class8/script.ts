// *
// * *
// * * *
// * * * *
// * * * * *

// console.log("* ")
// console.log("* * ")
// console.log("* * * ")
// console.log("* * * * ")
// console.log("* * * * * ")

// var printable = "* "
// var i = 1
// while(i<=5){
//     console.log(printable)
//     printable = printable + "* " // * + * = * * 
//     i++
// }

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

// var abc = 1
// while(abc<=5){
//     var def = 1
//     var printable = ""
//     while(def<=abc){
//         printable = printable + def + " "
//         def++
//     }
//     console.log(printable)
//     abc++
// }


var abc = 0
var arr = ["a","b","c","d","e"]
while(abc<=4){
    var def = 0
    var printable = ""
    while(def<=abc){
        printable = printable + arr[abc] + " "
        def++
    }
    console.log(printable)
    abc++
}


// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
