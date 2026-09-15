const ExcelJs = require('exceljs');

async function excelTest()
{
        let output = {row:-1, column:-1};
        const workbook = new ExcelJs.Workbook();
        await workbook.xlsx.readFile("/Users/pushpara/PlaywrightPractice/exceldownloadTest.xlsx");
        const worksheet = workbook.getWorksheet("Sheet1");
        worksheet.eachRow((row, rowNumber) =>
        {
                row.eachCell((cell, colNumber) =>
                {
                        if(cell.value === "Orange")
                        {
                                output.row = rowNumber;
                                console.log("Row number of Orange is: "+rowNumber);
                                output.column = colNumber;
                                console.log("Column number of Orange is: "+colNumber);
                        }

                } )     
                 
        } )
        const cell = worksheet.getCell(output.row, output.column);
        cell.value = "PineApple851";
        await workbook.xlsx.writeFile("/Users/pushpara/PlaywrightPractice/exceldownloadTest.xlsx");
}

excelTest();