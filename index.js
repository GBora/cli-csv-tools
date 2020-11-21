let readCSV = (filename) => {
    let fs = require('fs');
    let data = fs.readFileSync(filename, {encoding:'utf8'}).split(/\r?\n/);
    let headers = data.shift().split(',');
    headers = headers.map(header => header.trim());
    let result = data.map(e => {
        let newObject = {}
        let subElements = e.split(',').map(el => el.trim())
        headers.forEach((header,index) => newObject[header] = subElements[index]);
        return newObject;
    });
    return result;
};

let writeCSV = (filename, data, headers) => {
    headers =  headers || [];
    const createCsvWriter = require('csv-writer').createObjectCsvWriter;

    const csvWriter = createCsvWriter({
        path: filename,
        header: headers
    });
    
    csvWriter.writeRecords(data)
    .then(() => {
        console.log(`${filename} was written.`);
    });
};

module.exports = {
    readCSV: readCSV,
    writeCSV: writeCSV,
}