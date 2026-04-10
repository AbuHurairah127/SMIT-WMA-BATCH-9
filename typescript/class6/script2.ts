var students = ["Abu Hurairah", "Anas", "Bilal", "Zahid"]
// console.log(students.push("Hassan","Ali","Ahmed","Hamza"))
// console.log(students)
// console.log(students.pop())
// console.log(students)
// console.log(students.unshift("Hassan","Ali","Ahmed","Hamza"))
// console.log("After unshift",students)
// console.log(students.shift())
// console.log("After shift",students)
// console.log(students.slice(1,3)[0])
console.log(students.splice(1,1,"Hassan"))
console.log(students)

// CRUD = Create, Read, Update, Delete


var cars = ["Toyota", "Honda", "Ford", "Chevrolet"]
console.log(cars.splice(3,0))
console.log(cars)
