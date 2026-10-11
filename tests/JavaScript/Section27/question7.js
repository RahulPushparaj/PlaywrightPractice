//What are promises in JavaScript? Explain the difference between callback functions and promises with an example.


function fetchData(callback) {
    //Fetch data from server reslove, pending, rejected
    return new Promise((resolve) => {
    setTimeout(() =>
        {
                console.log("Data fetched from server");
                const data = "Sample Data";
                callback(data);
        }, 2000);
    });
}


fetchData().then(function(data) {
    console.log("Processing data: " + data);

})

const data = await fetchData();
console.log("Processing data: " + data);