let tools = require('./index.js');

let data = tools.readCSV('hw.csv');
data = data.filter(e => Number.parseInt(e['Index']) < 10)
console.log(data);
tools.writeCSV('output.csv', data, [{id: 'Index', title: 'Index'}, {id: 'Height', title: 'Height'}, {id: 'Weight', title: 'Weight'}]);