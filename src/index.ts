// Renamed using as
// import { studentName as name, studentRoll as roll } from "./Student";

import * as Student from "./Student"

function displayInfo(): void{
    console.log(`studentName: ${Student.studentName} and studentRoll: ${Student.studentRoll}`); 
}

displayInfo();