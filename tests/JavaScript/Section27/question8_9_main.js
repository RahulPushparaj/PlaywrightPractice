//Create an inheritance relationship between a parent and child class. Invoke the parent constructor from the child class. Create main.js to call parent class methods from a child class object.

//From the above code, explain how the super and these keywords help achieve the solution.

//Import the student class
import question8_9_student from "./question8_9_student.js";

//Create an object of the student class
const student = new question8_9_student('John Due', 20, 'A');

//call the method to get the student's details
console.log(student.getStudentDetails()); //output :  Name: John Due, Age: 20, Grade: A