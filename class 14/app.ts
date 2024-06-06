// class 15 () optional paramter, rest parameter, explicit casting, structural typing, index signature ,fresh object , stale object, 
 
//explicit typing (data type)
let age : unknown
// age = "Twenty"
age = 10.382162169
// console.log((age as string).toUpperCase());
console.log((age as number).toFixed(2));


// structural typing (object ka structure)
interface Ball{
    diameter:number

}

interface Sphere{
    diameter:number

}

let ball:Ball={
    diameter:10
}
let sphere:Sphere = {
    diameter:10
}
ball = sphere

interface Tube{
    diameter :number,
    lenght:number
}

let tube:Tube = {
    diameter:10,
    lenght:10
}

//RHS = LHS
// tube = ball //error
ball = tube // ok


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
function one(cb:() =>void){
    console.log("one");
    cb() //calling the function
}

//callback
function two(){
    console.log("async function");   
}

one(two)