# cli-csv-tools

A module of methods to make working with csv from the node command line easier.

## Example usage

```
node

let tools = require('cli-csv-tools');

let data = tools.readCSV('input.csv');

let filtered = data.filter(e => Number.parseInt(e['weight']) < 10);

console.log(filtered);

tools.writeCSV('output.csv', filtered, [{id: 'height', title: 'height'}, {id: 'weight', title: 'weight'}]);

.exit
```
## Methods

* readCSV(filename)
* writeCSV(filename, data, headers) // if headers are not supplied they will be set by the fields of the first object 