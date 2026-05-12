"use strict";
// built-in-types: string, number, boolean, void, null, undefiend
let userId;
let firstName;
let lastName;
let fullName;
let isActive;
userId = 2384;
firstName = "Niloyyy";
lastName = " Mondal";
fullName = "sree Niloy";
isActive = true;
// To add something, concat is used
fullName = firstName.concat(lastName);
// console.log(`Your userId: ${userId} userName: ${fullName} account active: ${isActive}`);
// To split a string and convert it into an array.
console.log(fullName.split(" "));
const uppercase = fullName.toUpperCase();
console.log(uppercase);
// console.log(fullName.toUpperCase());
// console.log(fullName.toLocaleLowerCase());
function display() {
    // console.log("Hello iam display");
}
display();
