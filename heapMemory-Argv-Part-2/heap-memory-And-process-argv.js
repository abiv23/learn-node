let initialMemory = process.memoryUsage().heapUsed;

let word = process.argv[2];

let wordArray = [];

// Loop 10 times, pushing into the array each time

for (let i = 0; i < 10; i++){
    wordArray.push(`${word} count: ${i}`);
}

console.log(wordArray);

console.log(`Starting memory usage: ${initialMemory}. \nCurrent memory usage: ${process.memoryUsage().heapUsed}. \nAfter using the loop to add elements to the array, the process is using ${process.memoryUsage().heapUsed - initialMemory} more bytes of memory.`)