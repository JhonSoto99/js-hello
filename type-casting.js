//Explicit Type casting
const string = '42'
const integer = parseInt(string)

const stringDecimal = '3.14'
const float = parseFloat(stringDecimal)

const binary = '1010'
const decimal = parseInt(binary, 2)

// Implicit Type Casting
// cuando hay strings concatena de lo contrario suma.
const sum = '5' + 3
console.log(sum)

const sumBoolean = '5' + true
console.log(sumBoolean)