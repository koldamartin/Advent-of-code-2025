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


// part A
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


// part B

let ranges = ranges_input.map(range => range.split('-').map(Number));
// sort ranges from lowest to highest by the 0 index
ranges.sort((a, b) => a[0] - b[0]);

// calculate absolute minimum and maximum from ranges
let absolutMin = Math.min(...ranges.map(range => range[0]));
let absolutMax = Math.max(...ranges.map(range => range[1]));

let totalRange = absolutMax - absolutMin + 1;
let continuousMax = 0

for (let i = 0; i < ranges.length; i++) {
    // do not iterate over last element
    if (i === ranges.length - 1) {
        break;
    }
    let currentMax = ranges[i][1];
    if (currentMax > continuousMax) {
        continuousMax = currentMax;
    }

    if (ranges[i + 1][0] > ranges[i][1] && ranges[i + 1][0] > continuousMax) {

        let rottenIngredients = ranges[i + 1][0] - continuousMax - 1;
        console.log('rottenIngredients between ranges ' + ranges[i] + ' and ' + ranges[i + 1] + ':', rottenIngredients);
        totalRange -= rottenIngredients;
    }
}

let solutionB = totalRange;
console.log('solutionB:', solutionB);