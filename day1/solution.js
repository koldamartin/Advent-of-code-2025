const fs = require('fs');
const filePath = './input.txt';


function readFileToArray() {
    const data = fs.readFileSync('input.txt', 'utf-8');
    const lines = data.split('\n');
    const cleanedLines = lines.filter(line => line.trim().length > 0);
    return cleanedLines;
}

const inputArray = readFileToArray()

let safeNumber = 50
let answerA = 0
let answerB = 0


for (let i = 0; i < inputArray.length; i++) {
    // Extract direction (first character) and number (rest of string)
    let letter = inputArray[i].slice(0, 1);
    let number = parseInt(inputArray[i].slice(1));

    if (number > 100) {

        let dialTurns = parseInt(number.toString()[0]);
        answerB = answerB + dialTurns

        // Keep only the last two digits for the actual movement
        number = parseInt(number.toString().slice(-2));     
        
    }

    // Apply movement based on direction
    if (letter == 'R') {
        safeNumber = safeNumber + number;
    } else if (letter == 'L') {
        safeNumber = safeNumber - number;
    }

    // Handle wraparound when going past 100
    if (safeNumber > 100) {
        safeNumber = safeNumber - 100
        answerB = answerB + 1

    }
    // Handle wraparound when going below 0
    if (safeNumber < 0) {
        // check if movment started at 0 to prevent double count.
        if (safeNumber + number != 0) {
            answerB = answerB + 1
        }
        safeNumber = safeNumber + 100
    }

    // Check if safe is unlocked (at position 0 or 100)
    if (safeNumber == 0) {
        answerA = answerA + 1;
        answerB = answerB + 1

    } else if (safeNumber == 100) {
        answerA = answerA + 1;
        answerB = answerB + 1

        // Reset position when reaching 100
        safeNumber = 0
    }
}

console.log("answerA" + " " + answerA)
console.log("answerB" + " " + answerB)