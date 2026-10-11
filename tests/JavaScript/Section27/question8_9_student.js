//Create an inheritance relationship between a parent and child class. Invoke the parent constructor from the child class. Create main.js to call parent class methods from a child class object.

//From the above code, explain how the super and these keywords help achieve the solution.

//Import the person class
import question8_9_person from "./question8_9_person.js";

//Define the child class that inherits from person
class question8_9_student extends question8_9_person {
    constructor(name, age, grade) {
        //call the parent class constructor using super
        super(name, age);
        this.grade = grade;
    }

    //Method to get the student's details
    getStudentDetails() {
        //call the parent class method
        const parentDetails = super.getDetails();
        return `${parentDetails}, Grade: ${this.grade}`;
    }
}

//Export the student class
export default question8_9_student;