"use strict";
class Human {
    name;
    age;
    email;
    gender;
    #password;
    constructor(_name, _age, _email, _password, _gender) {
        this.name = _name;
        this.age = _age;
        this.email = _email;
        this.#password = _password;
        this.gender = _gender;
    }
    get password() {
        return this.#password;
    }
    set updatePassword(password) {
        this.#password = password;
    }
}
class Student extends Human {
    rollNo;
    class;
    section;
    dpt;
    constructor(_name, _age, _email, _password, _gender, _rollNo, _class, _section, _dpt) {
        super(_name, _age, _email, _password, _gender);
        this.rollNo = _rollNo;
        this.class = _class;
        this.section = _section;
        this.dpt = _dpt;
    }
}
let student1 = new Student("Abu Hurairah", 23, "abuhurairah127@gmail.com", "123456", "Male", 123, "10th", "A", "Computer Science");
console.log(student1);
// let ids = ["name","age","email","password","gender","rollNo","class","section","dpt"];
// let data = ids.map((id)=>{
//     return document.getElementById(id)?.value;
// })
let nums = ["Abu Hurairah", "Anas", "Bilal", "Zahid"];
let square = nums.map((num) => {
    console.log(num.length);
});
console.log(square);
