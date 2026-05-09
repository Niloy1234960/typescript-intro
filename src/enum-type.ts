// enum- store constant; duplicate value is not allowed here
// enum types: numeric, string, hetergenous

// enum type
enum RequestType1 {
    readData = 1, 
    saveData, 
    deleteData,
}
// console.log(RequestType1);

// string enum
enum RequestType2{
    readData = "Read_data",
    saveData = "Save_data",
    deleteData = "DeleteData",
}
// console.log(RequestType2);
// console.log(RequestType2.readData);
// console.log(RequestType2["saveData"]);


// hetergenous enum 
enum RequestType3 {
    readData = "Read",
    deleteData = "Delete",
    id = 199,
}
console.log(RequestType3);
console.log(RequestType3.id);
