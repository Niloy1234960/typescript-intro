"use strict";
// enum- store constant; duplicate value is not allowed here
// enum types: numeric, string, hetergenous
// enum type
var RequestType1;
(function (RequestType1) {
    RequestType1[RequestType1["readData"] = 1] = "readData";
    RequestType1[RequestType1["saveData"] = 2] = "saveData";
    RequestType1[RequestType1["deleteData"] = 3] = "deleteData";
})(RequestType1 || (RequestType1 = {}));
// console.log(RequestType1);
// string enum
var RequestType2;
(function (RequestType2) {
    RequestType2["readData"] = "Read_data";
    RequestType2["saveData"] = "Save_data";
    RequestType2["deleteData"] = "DeleteData";
})(RequestType2 || (RequestType2 = {}));
// console.log(RequestType2);
// console.log(RequestType2.readData);
// console.log(RequestType2["saveData"]);
// hetergenous enum 
var RequestType3;
(function (RequestType3) {
    RequestType3["readData"] = "Read";
    RequestType3["deleteData"] = "Delete";
    RequestType3[RequestType3["id"] = 199] = "id";
})(RequestType3 || (RequestType3 = {}));
console.log(RequestType3);
console.log(RequestType3.id);
