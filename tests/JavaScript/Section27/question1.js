//Can a JavaScript object hold a function as a property? Explain with an example.

const person ={
    name : "John",
    age : 30,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
}
person.name
person.greet() // Output: Hello, my name is John