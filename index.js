const XLSX = require('xlsx');
const sheet2arr = require('./sheet2arr.js');

const workbook = XLSX.readFile('./testData/test.xlsx');
const sheetname = workbook.SheetNames[0];
let sheet = workbook.Sheets[sheetname]
let courses = {};

let cells = sheet2arr(sheet, XLSX, 'A1:W5');
let headers = cells.slice(0, 3);

cells.slice(3).forEach((row) => {
	rowKey = `${row[0]}-${row[1]}-${row[7]}`;
	courses[rowKey] = row;
})

// console.log(headers);
// console.log(headers[0]);
hierarchicalHeaders = headers[0].map((c, i) => [c, headers[1][i], headers[2][i]])
// console.log(headers[1]);
// console.log(headers[2]);
// console.log(courses);
