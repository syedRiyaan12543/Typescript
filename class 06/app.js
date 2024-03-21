"use strict";
//class 6 start by revision of if else statements
// let email :string = "rayyan@gmail.com"
// let pass :string = '123456'
// if(email == "rayyan@gmail.com" && pass === "123456"){
//     console.log("Sucsessfully Logged In");
// }else{
//     console.log("invalid Credentials");
// }
//else if statement
let percentage = 100;
if (percentage >= 80 && percentage <= 100) {
    console.log("A+ Grade");
}
else if (percentage >= 70 && percentage <= 79.99) {
    console.log("A Grade");
}
else if (percentage >= 60 && percentage <= 69.99) {
    console.log("B Grade");
}
else if (percentage >= 50 && percentage <= 59.99) {
    console.log("C Grade");
}
else if (percentage >= 33 && percentage <= 49.99) {
    console.log("D Grade");
}
else if (percentage > 100) {
    console.log("Invalid Percentage");
}
else {
    console.log("Fail");
}
