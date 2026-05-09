type User = { Newname: string, userId: number, sex: string};

let newUsers: User[];
newUsers = [];

let newUser1: User;
newUser1 = { Newname: "Mashiyat", userId: 10, sex: "male"};


let newUser2: User;
newUser2 = { Newname: "Apurbo", userId: 10, sex: "male"};


let newUser3: User;
newUser3 = { Newname: "Siam", userId: 10, sex: "male"};

newUsers.push(newUser2, newUser2, newUser3);
// console.log(newUsers); 

type RequestType = "POST" | "GET";
let getRequest : RequestType;
getRequest = "GET";

function requestHandler ( requestType : RequestType){
    console.log(requestType);
}

requestHandler("POST")