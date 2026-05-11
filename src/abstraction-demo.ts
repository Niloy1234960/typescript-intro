// abstract class User {
//   userName: string;
//   age: number;

//   constructor(userName: string, age: number) {
//     this.userName = userName;
//     this.age = age;
//   }

//   abstract display(): void;
// }

// class Student extends User {
//   studentId: number;

//   constructor(userName: string, age: number, studentId: number) {
//     super(userName, age);
//     this.studentId = studentId;
//   }
//   display(): void {
//     console.log(`username: ${this.userName}, age: ${this.age} and studentId ${this.studentId}`);
//   }
// }

// let student1 = new Student("Niloyy", 19, 1000);
// student1.display()

// let student2 = new Student("apuu", 19, 1001);
// student2.display()

// let student3 = new Student("siam", 19, 1002);
// student3.display()

// let student4 = new Student("Ushshab", 19, 1003)
// student4.display();


abstract class Users {
  usersName: string;
  usersId: number;

  constructor(usersName: string, usersId: number){
    this.usersName = usersName;
    this.usersId = usersId;
  }

  abstract display(): void;
}

class Student extends Users{
  userAge: number;

  constructor (usersName: string, usersId: number, userAge: number){
    super(usersName, usersId);
    this.userAge = userAge
  }

  display(): void {
     console.log(`Ok let's see our UserName: ${this.usersName}, UserId: ${this.usersId} and UserAge: ${this.userAge}`);
  }
}

let student1 = new Student("Niloyy brohh", 867719, 20)
student1.display();
