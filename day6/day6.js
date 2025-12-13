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

numbersInput = []
operationsInput = []

for (const oneLine of inputArray) {
  
  let operations = oneLine.split(/\s+/).filter(word => isNaN(word));
  if (operations.length > 0) {
    operationsInput.push(operations);
  }

  let numbers = oneLine.split(/\s+/).map(Number);
  numbers = numbers.filter(num => num !== 0);
  numbers = numbers.filter(num => !isNaN(num));
  if (numbers.length > 0) {
    numbersInput.push(numbers);
  }
}

let solutionA = 0

for (let i = 0; i < numbersInput[0].length; i++) {

  let numbersForOperation = [];
  let operator = operationsInput[0][i];
  
  for (let line of numbersInput) {
    numbersForOperation.push(line[i]);
  }
  
  if (operator === '+') {
    solutionA += numbersForOperation.reduce((acc, num) => acc + num, 0);
  } else if (operator === '*') {
    solutionA += numbersForOperation.reduce((acc, num) => acc * num, 1);
  }
}

console.log('Solution A:', solutionA);
