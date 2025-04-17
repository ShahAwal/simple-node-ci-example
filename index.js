// index.js
// This is the main entry point defined in package.json

// Import the calculator module (we'll create this next)
const calculator = require("./calculator");

console.log("Hello World! This is the main application script.");

// Example usage of the calculator module
const num1 = 10;
const num2 = 5;

const sum = calculator.add(num1, num2);
const difference = calculator.subtract(num1, num2);

console.log(`The sum of ${num1} and ${num2} is: ${sum}`); // Output: 15
console.log(`The difference between ${num1} and ${num2} is: ${difference}`); // Output: 5

console.log("Application finished.");

