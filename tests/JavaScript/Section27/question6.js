//What are callback functions in JavaScript?

function fetchData(callback) {
    //Fetch data from server
    setTimeout(() =>
        {
                console.log("Data fetched from server");
                const data = "Sample Data";
                callback(data);
        }, 2000);
}


function processData(data) {
    console.log("Processing data: " + data);
}

function modifyData(data) {
    console.log("Modifying data: " + data);
}

fetchData(processData);
fetchData(modifyData);