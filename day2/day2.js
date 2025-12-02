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


let resultList = [];

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
        let numStr = listRange[i].toString();

        if (numStr.length % 2 !== 0) {
        console.log("Number of digits is odd, cannot split into two equal halves.");
        continue;
        }

        let midIndex = Math.floor(numStr.length / 2);
        let firstHalf = numStr.slice(0, midIndex);
        let secondHalf = numStr.slice(midIndex);


        if (firstHalf == secondHalf) {
            resultList.push(parseInt(numStr));
        }
    }
}
console.log('Result for part A:' + ' ' + resultList);
console.log('Sum for part A:' + ' ' + resultList.reduce((a, b) => a + b, 0));
