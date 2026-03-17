const date =new Date;
console.log(date);

class User{
    constructor(name,email,age){
        this.name=name;
        this.email=email;
        this.age=age;
    }
    login(){
        return `User logged in successfully, ${this.name}`;
    };
}
class Teacher extends User{
    constructor(name,email,age,course){
        super(name,email,age);
        this.course=course;
    }
    makeAssignment(){
        return `Here is your todays assingment`;
    }
}
const user1 = new User("Aatish","aatishbhatta02@gmail.com",22);
const user2 = new User("Krish","krish@gmail.com",25);
const teacher1=new Teacher("Bhaskar","bhaskar22@gmail.com",40,"Physics");
console.log(teacher1.makeAssignment());
console.log(user2); 
console.log(user1.login());

function normalFunction(){
    console.log("Normal Function",this);
}
const arrowFunction=()=>{
    console.log("Arrow Function",this);
}
console.log("node",this)
normalFunction();
arrowFunction();