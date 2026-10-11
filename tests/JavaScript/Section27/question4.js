//Where are the push, pop, slice, shift, and unshift methods used when accessing array elements?

// Array example and operations

//Define an array
const fruits = ["Apple", "Banana", "Cherry", "Date"];

//Access elements by index
console.log(fruits[0]); // Output: Apple
console.log(fruits[2]); // Output: Cherry

//Push method - adds an element to the end of the array
fruits.push("Elderberry");
console.log(fruits); // Output: ["Apple", "Banana", "Cherry", "Date", "Elderberry"]

//Pop method - removes the last element from the array
const lastFruit = fruits.pop();
console.log(lastFruit); // Output: Elderberry
console.log(fruits); // Output: ["Apple", "Banana", "Cherry", "Date"]

//unshift method - adds an element to the beginning of the array
fruits.unshift("Fig");
console.log(fruits); // Output: ["Fig", "Apple", "Banana", "Cherry", "Date"]    

//shift method - removes the first element from the array
const firstFruit = fruits.shift();
console.log(firstFruit); // Output: Fig

//indexOf method - returns the index of the first occurrence of a specified value in an array
const index = fruits.indexOf("Banana");
console.log(index); // Output: 1

//slice method - returns a shallow copy of a portion of an array into a new array object
const slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // Output: ["Banana", "Cherry"]

//splice method - changes the contents of an array by removing or replacing existing elements and/or adding new elements
const removedFruits = fruits.splice(1, 2, "Grape", "Honeydew");
console.log(removedFruits);

//Iterate over the array using forEach
fruits.forEach(function(fruit, index) {
    console.log(index + ": " + fruit);
});

