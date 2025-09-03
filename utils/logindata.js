const xlsx = require("xlsx");
const path = require("path");

function readExcel(filePath, sheetName) {
  // Load workbook
  const workbook = xlsx.readFile(path.resolve(filePath));

  // Get sheet
  const worksheet = workbook.Sheets[sheetName];

  // Convert sheet to JSON
  const data = xlsx.utils.sheet_to_json(worksheet, { raw: false });

  return data;  // returns array of objects [{Column1: value1, Column2: value2}, ...]
}

module.exports = { readExcel };
