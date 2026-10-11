//Create an inheritance relationship between a parent and child class. Invoke the parent constructor from the child class. Create main.js to call parent class methods from a child class object.

//From the above code, explain how the super and these keywords help achieve the solution.


//Define the parent class
class question8_9_person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    //Method to get the person's details
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

//Export the parent class
export default question8_9_person;