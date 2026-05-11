// access modifier: public, private, protected, readonly.
class user {
    readonly UserName: string;
    public UserId: number;

    constructor(UserName: string, UserId: number){
        this.UserName = UserName;
        this.UserId = UserId;
    }

    display() : void {
        console.log("Hello from bangladesh");
    }
}

class student extends user{
    private UserAge: number;

    constructor( UserName: string, UserId: number, UserAge: number){
        super(UserName, UserId);
        this.UserAge = UserAge;
    }

    display(): void {
        console.log(`Ok let's see our UserName: ${this.UserName}, UserId: ${this.UserId} and UserAge: ${this.UserAge}`);
    }
    
    // how to access and modifier private member
    // It is shown here.
    setUserAge(UserAge: number) : void{
        this.UserAge = UserAge
    }

    getUserAge() : number{
        return this.UserAge;
    }
}

let student1 = new student("Nilooy", 234, 23)
student1.setUserAge(2345352342);
console.log(student1.getUserAge());
// student1.display();

let user1 = new user("Maybe Niloy", 23);
console.log(user1.UserName);
// console.log(user1);
// user1.display()


