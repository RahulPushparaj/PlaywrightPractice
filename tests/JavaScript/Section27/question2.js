//What are anonymous functions in JavaScript? Define their syntax and implementation.
const person ={
    name : "John",
    age : 30,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
}
person.name
person.greet() // Output: Hello, my name is John



function sayHello() {
    return "hello, I am the world";
}

const helloMessage = sayHello();
console.log(helloMessage); // Output: hello, I am the world


const greet = function(name) {
    return "Hello, I am " + name;
}

console.log(greet)