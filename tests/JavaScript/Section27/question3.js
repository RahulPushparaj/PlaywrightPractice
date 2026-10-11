//What is the difference between var, const, and let? Explain with an example.

//var = is function scoped, can be re-declared and updated. It is hoisted to the top of its scope and initialized with undefined.

function varExample() {
    var x = 1;
    if (true) {
        var x = 2; // same variable!
        console.log(x); // Output: 2
    }
    console.log(x); // Output: 2
}

varExample();

//let = is block scoped, can be updated but not re-declared. It is hoisted to the top of its scope but not initialized.

function letExample() {
    let y = 1;

    if (true) {
        let y = 2; // different variable
        z = 3;
        
        console.log(y); // Output: 2
    }
    console.log(z);
    console.log(y); // Output: 1
}

letExample();

//const = is block scoped, cannot be updated or re-declared. It is hoisted to the top of its scope but not initialized. 

function constExample() {
    const z = 1;

    if (true) {
        const z = 2; // different variable
        console.log(z); // Output: 2
    }
    z = 3;
    console.log(z); // Output: 1
}

constExample();