"use strict";
// // kono property optional rakhar jonne ? use kora hoy
let users;
users = {
    name: "Niloy",
    userId: 10,
    userEmail: "niloymondal1370@gmail.com",
};
// define object
let currentUsers;
currentUsers = {
    name: "Apurbo",
    UserId: 867720,
};
// define array of object
let oldUsers;
oldUsers = [
    {
        name: "Siam",
        userId: 123,
        isActive: false
    },
    {
        name: "Siam",
        userId: 123,
        isActive: false
    },
    {
        name: "Siam",
        userId: 123,
        isActive: false
    },
];
let newUsers;
newUsers = [];
let newUser1;
newUser1 = { Newname: "Mashiyat", userId: 10, sex: "male" };
// newUsers.push(newUser1);
let newUser2;
newUser2 = { Newname: "Mashiyat", userId: 10, sex: "male" };
newUsers.push(newUser2, newUser2);
console.log(newUsers);
for (const key in newUsers) {
    console.log(newUsers[key]);
}
