const str = "some test string";

// A.
const findStartEndString = (str) => {
    const startEnd = `First letter: ${str[0]}, Last letter: ${str[str.length - 1]}`;

    return startEnd;
}


console.log('A.', findStartEndString(str));


// B.
const firstAndLastLetterToUppercase = (str) => {
    const result = str.replace(/(?:^.)|(?:.$)/g, string => string.toUpperCase());

    return result;
}


console.log('B.', firstAndLastLetterToUppercase(str));


//C.
const findSecondSpace = (str) => {
    const firstSpaceIndex = str.indexOf(' ');
    const secondSpaceIndex = str.indexOf(' ', firstSpaceIndex + 1);

    return secondSpaceIndex;
}

console.log('C.', findSecondSpace(str));


//D.
const getNewStringWithoutSixSymbols = (str) => {
    const newStringWithoutSixSymbols = str.slice(0, -6);

    return newStringWithoutSixSymbols;
}


console.log('D.', getNewStringWithoutSixSymbols(str))