const XLSX = require('xlsx');
const sheet2arr = require('./sheet2arr.js');

const workbook = XLSX.readFile('./testData/test.xlsx');
const sheetname = workbook.SheetNames[0];
let sheet = workbook.Sheets[sheetname]
let courses = {};

let cells = sheet2arr(sheet, XLSX, 'A1:Z5');
let headers = cells.slice(0, 3);

cells.slice(3).forEach((row) => {
	rowKey = `${row[0]}-${row[1]}-${row[7]}`;
	courses[rowKey] = row;
})

// console.log(headers);
hierarchicalHeaders = headers[0].map((c, i) => [c, headers[1][i], headers[2][i]])
	.map((headerColumn) => headerColumn.filter((cell) => cell !== undefined).join(' => '))
console.log(hierarchicalHeaders);
// console.log(courses);
