//	from  https://github.com/SheetJS/js-xlsx/issues/270
//	Modifications:
//		Made into a module
//		Depencency injection of XLSX
//		Added user defined range as the given !ref was wrong
var sheet2arr = function(sheet, XLSX, userRange){
	var result = [];
	var row;
	var rowNum;
	var colNum;
	var ref = userRange ? userRange : sheet['!ref'];
	var range = XLSX.utils.decode_range(ref);
	for(rowNum = range.s.r; rowNum <= range.e.r; rowNum++){
		row = [];
		for(colNum = range.s.c; colNum <= range.e.c; colNum++){
			var nextCell = sheet[
				XLSX.utils.encode_cell({r: rowNum, c: colNum})
			];
			if( typeof nextCell === 'undefined' ){
				row.push(void 0);
			} else row.push(nextCell.w);
		}
		result.push(row);
	}
	return result;
};

module.exports = sheet2arr;
