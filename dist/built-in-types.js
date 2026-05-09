"use strict";
// built-in-types: string, number, boolean, void, null, undefiend
Object.defineProperty(exports, "__esModule", { value: true });
let userId;
let firstName;
let lastName;
let fullName;
let isActive;
userId = 2384;
firstName = "Niloyyy";
lastName = " Mondal";
isActive = true;
// To add something, concat is used
fullName = firstName.concat(lastName);
console.log(`Your userId: ${userId} userName: ${fullName} account active: ${isActive}`);
// To split a string and convert it into an array.
console.log(fullName.split(" "));
console.log(fullName.toUpperCase());
console.log(fullName.toLocaleLowerCase());
function display() {
    console.log("Hello iam display");
}
display();
//# sourceMappingURL=built-in-types.js.map