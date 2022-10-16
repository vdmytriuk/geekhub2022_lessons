const str = "some test string";

// A.
const findStartEndString = (str) => {
    const startEnd = `First letter: ${str[0]}, Last letter: ${str[str.length - 1]}`;

    return startEnd;
}


console.log('A.', findStartEndString(str));


// B.
const firstAndLastLetterToUppercase = (str) => {
    const croppedStr = str.slice(1, -1);

    const firstUpperLetter = str[0].toUpperCase();
    const lastUpperLetter = str[str.length - 1].toUpperCase();

    const tmpLettersArray = croppedStr.split('');

    tmpLettersArray.unshift(firstUpperLetter);
    tmpLettersArray.push(lastUpperLetter);

    const result = tmpLettersArray.join('');

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
const getNewStringWithoutSixLetters = (str) => {
    const newStringWithoutSixLetters = str.slice(0, -7);

    return newStringWithoutSixLetters;
}


console.log('D.', getNewStringWithoutSixLetters(str))