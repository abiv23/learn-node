const readline = require('readline');
const fs = require('fs');

const myInterface = readline.createInterface({
  input: fs.createReadStream('shoppingList.txt')
});

const transformData = (line) => {
  fileStream.write(`They were out of: ${line}\n`)
}

const fileStream = fs.createWriteStream('shoppingResults.txt', transformData);

myInterface.on('line', transformData);


