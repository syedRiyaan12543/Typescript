"use strict";
// class 15 () optional paramter, rest parameter, explicit casting, structural typing, index signature ,fresh object , stale object, 
Object.defineProperty(exports, "__esModule", { value: true });
//explicit typing (data type)
let age;
// age = "Twenty"
age = 10.382162169;
// console.log((age as string).toUpperCase());
console.log(age.toFixed(2));
let ball = {
    diameter: 10
};
let sphere = {
    diameter: 10
};
ball = sphere;
let tube = {
    diameter: 10,
    lenght: 10
};
//RHS = LHS
// tube = ball //error
ball = tube; // ok
//stale object fresh object
// var x :{
//     id :number,
//     keyname :any,
//     [y:string] :any
// }
// x = {
//     id= 100,
//     firstName : "Ali"
// }
// callback function
//main function (hoc)
function one(cb) {
    console.log("one");
    cb(); //calling the function
}
//callback
function two() {
    console.log("async function");
}
one(two);
