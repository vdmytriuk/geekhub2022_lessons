// A.
const PI = Math.PI;

const croppedPI = +PI.toFixed(2);

console.log('A.', croppedPI);


// B.
const brokenNumber = 0.6 + 0.7;

const correctNumber = +brokenNumber.toFixed(10);

console.log('B.', correctNumber);


// C.
const targetString = '100$';

const receivedNumber = parseInt(targetString);

console.log('C.', receivedNumber);