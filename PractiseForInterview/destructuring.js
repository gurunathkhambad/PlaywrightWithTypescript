"use strict";
// Accessing the values directly from the object
const user = {
    uname: "Guru",
    role: "QA",
    age: "28"
};
const { uname, role, age } = user;
console.log(uname);
console.log(user.role);
// Accessing the values directly from the array 
let arr = ["Guru", 21, "Khambad"];
const [first, second, third, fourth] = arr;
console.log(fourth);
