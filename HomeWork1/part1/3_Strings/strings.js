const str = "some test string";

// A.
const startEnd = [str[0], str[str.length - 1]];

console.log('A.', startEnd);


// B.
const croppedStr = str.slice(1, -1);

const firstUpper = str[0].toUpperCase();
const lastUpper = str[str.length - 1].toUpperCase();

const tmp = croppedStr.split('');

tmp.unshift(firstUpper);
tmp.push(lastUpper);

const result = tmp.join('');

console.log('B.', result);