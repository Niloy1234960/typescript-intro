class User {
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  display(): void {
    console.log(`username: ${this.userName}, age: ${this.age}`);
  }
}

class Student extends User {
  studentId: number;

  constructor(userName: string, age: number, studentId: number) {
    super(userName, age);
    this.studentId = studentId;
  }
  display(): void {
    console.log(`username: ${this.userName}, age: ${this.age} and studentId ${this.studentId}`);
  }
}

let student1 = new Student("Niloyy", 19, 1000);
student1.display()

let student2 = new Student("apuu", 19, 1001);
student2.display()

let student3 = new Student("siam", 19, 1002);
student3.display()


