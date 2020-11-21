let tools = require('./index.js');

let data = tools.readCSV('input.csv');
data = data.slice(0, 2);
console.log(data);
tools.writeCSV('out.csv', data);