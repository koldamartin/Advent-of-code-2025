const fs = require('fs');
const filePath = './input.txt';

function readFileToArray() {
    const data = fs.readFileSync(filePath, 'utf-8');
    // Split the data on commas instead of newlines
    const lines = data.split('\n\n');
    const cleanedLines = lines.filter(line => line.trim().length > 0);
    return cleanedLines;
}

const inputArray = readFileToArray();
ranges_input = inputArray[0].split('\n');
numbers_input = inputArray[1].split('\n');

let resultA = 0;

for (const number of numbers_input) {
    for (const range of ranges_input) {
        const [start, end] = range.split('-').map(Number);
        if (number >= start && number <= end) {
            resultA += 1;

            break;
        }
    }
}
console.log('resultA:', resultA);