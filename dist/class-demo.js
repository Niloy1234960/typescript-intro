"use strict";
class User {
    constructor(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    display() {
        console.log(`username: ${this.userName}, age: ${this.age}`);
    }
}
// class object
let user1 = new User("Sree Niloy Chandra", 20);
user1.display();
let user2 = new User("Mondal", 15);
user2.display();
