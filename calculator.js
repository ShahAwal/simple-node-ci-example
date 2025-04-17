// calculator.js
// A simple module with functions to demonstrate testing.

/**
 * Adds two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of a and b.
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtracts the second number from the first.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The result of a minus b.
 */
function subtract(a, b) {
  return a - b;
}

// Export the functions so they can be used by other files (like index.js and calculator.test.js)
module.exports = {
  add,
  subtract
};

