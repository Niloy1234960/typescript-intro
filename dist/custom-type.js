"use strict";
let newUsers;
newUsers = [];
let newUser1;
newUser1 = { Newname: "Mashiyat", userId: 10, sex: "male" };
let newUser2;
newUser2 = { Newname: "Apurbo", userId: 10, sex: "male" };
let newUser3;
newUser3 = { Newname: "Siam", userId: 10, sex: "male" };
newUsers.push(newUser2, newUser2, newUser3);
let getRequest;
getRequest = "GET";
function requestHandler(requestType) {
    console.log(requestType);
}
requestHandler("POST");
