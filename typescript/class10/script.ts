// // var a = 10
// // var a = 20


// // let a = 20
// // let a = 10



// // let a = 20 
// // a = 15
// // var b = 40
// // {
// //     let a = 10
// //     console.log(a,"A Inside")
// //     var b = 20
// //     console.log(b,"B Inside")
// // }

// // console.log(a,"A Outside")
// // console.log(b,"B Outside")

// // const abc = 10
// // abc = 15

// // console.log(sum)
// // let sum = 55



// // console.log(console.log("ABC"))

// console.log("Hello shuru mn")
// setTimeout(()=>{
//     console.log(("Hello"))
// },5000)
// console.log("Hello end mn")



let obj:{name:string,age:number,email:string}  = {
    name:"Abu Hurairah",
    age:23,
    email:"abuhurairah127@gmail.com",
}


let obj2:{name:string,age:number,email:string} = {
    name:"Anas",
    age:24,
    email:"anas@gmail.com",
}


obj = obj2;




type User = {
    name:string,
    age:number,
    email:string,
}


let user:User ={
    name:"Abu Hurairah",
    age:23,
    email:"abuhurairah127@gmail.com"
}


type function1T = (am:string)=>[string,number,string]

const function1:function1T = (am) => {
    console.log(am + 5000)
    return [am,23,"abuhurairah127@gmail.com"]
}


function1("100")