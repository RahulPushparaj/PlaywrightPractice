const base = require('@playwright/test');


exports.customtest = base.test.extend(
    {
        testDataForOrder : {
            username : "pushparajrahulshanthi851@gmail.com",
            password : "Push@851",
            productName : "ZARA COAT 3"
        }
    }
)