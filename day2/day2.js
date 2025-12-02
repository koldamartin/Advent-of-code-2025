const fs = require('fs');
const filePath = './input.txt';

function readFileToArray() {
    const data = fs.readFileSync(filePath, 'utf-8');
    // Split the data on commas instead of newlines
    const lines = data.split(',');
    const cleanedLines = lines.filter(line => line.trim().length > 0);
    return cleanedLines;
}

const inputArray = readFileToArray();


let resultListA = [];
let resultListB = [];

// For each element in inputArray
for (let i = 0; i < inputArray.length; i++) {
    // split the inputArray[i] by the '-' character
    let [start, end] = inputArray[i].split('-');

    start = parseInt(start);
    end = parseInt(end);

    // Create an empty array to store the range
    let listRange = [];

    // Loop from start to end (inclusive) to create a list
    for (let i = start; i <= end; i++) {
        listRange.push(i);
    }


    //for each element in the listRange
    for (let i = 0; i < listRange.length; i++) {

        // Solution to part Aaaaaa
        let numStr = listRange[i].toString();

        let midIndex = Math.floor(numStr.length / 2);
        let firstHalf = numStr.slice(0, midIndex);
        let secondHalf = numStr.slice(midIndex);

        if (firstHalf == secondHalf) {
            resultListA.push(parseInt(numStr));
        }

        // Solution to part B
        const pattern = /^(.+?)\1+$/;
        const match = numStr.match(pattern)

        if (match) {
            resultListB.push(parseInt(numStr));
        }
    }
}

console.log('Sum for part A:' + ' ' + resultListA.reduce((a, b) => a + b, 0));
console.log('Sum for part B:' + ' ' + resultListB.reduce((a, b) => a + b, 0));
