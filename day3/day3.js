const fs = require('fs');
const filePath = './input.txt';

function readFileToArray() {
    const data = fs.readFileSync(filePath, 'utf-8');
    // Split the data on commas instead of newlines
    const lines = data.split('\n');
    const cleanedLines = lines.filter(line => line.trim().length > 0);
    return cleanedLines;
}

const inputArray = readFileToArray();


// part A solution
let SolutionA = 0;


function findMaxNumberInSecondPart(maxNumber, number) {

    for (let i = 0; i < number.length; i++) {
        if (number[i] == maxNumber) {
            let secondPart = number.substring(i + 1);
            if (secondPart) {
                let secondMaxNumber = Math.max(...secondPart.split('').map(Number));
                return secondMaxNumber;
            }
            else {
                return null;
            }
        }
    }
}


// iterate over each line in input
for (let i = 0; i < inputArray.length; i++) {

    //find max number on one line
    let maxNumber = Math.max(...inputArray[i].split('').map(Number));
    let secondMaxNumber = findMaxNumberInSecondPart(maxNumber, inputArray[i]);
    
    // if the maxNumber is not the last in line
    if (secondMaxNumber != null) {
        let finalLineNumber = maxNumber * 10 + secondMaxNumber;
        
        SolutionA += finalLineNumber;
    }

    // if the maxNumber is the last in line
    else {
        // remove the the maxNumber from inputArray[i]
        let temporaryArray = inputArray[i].replace(maxNumber, '');
        let nextMaxNumber = Math.max(...temporaryArray.split('').map(Number));
        let secondMaxNumber = findMaxNumberInSecondPart(nextMaxNumber, inputArray[i]);
        let finalLineNumber = nextMaxNumber * 10 + secondMaxNumber;

        SolutionA += finalLineNumber;
    }
}

console.log('Solution A: ' + SolutionA)
