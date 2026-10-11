//Is JavaScript Asynchronous? Prove with an example.

console.log("Hey I am 1st Program");
console.log("Hey I am 2nd Program");
console.log("Hey I am 3rd Program");   
console.log("Hey I am 4th Program");
setTimeout(function() 
{
    console.log("Hey I am 5th Program");
}, 2000);
console.log("Hey I am 6th Program");