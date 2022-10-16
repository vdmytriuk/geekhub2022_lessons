// A.
const croppedPI = (PI) => {
    const croppedPI = +PI.toFixed(2);

    return croppedPI;
}


console.log('A.', croppedPI(Math.PI));


// B.
const repairNumber = (brokenNumber) => {
    const correctNumber = +brokenNumber.toFixed(10);

    return correctNumber;
}


console.log('B.', repairNumber(0.6 + 0.7));


// C.
const getReceivedNumber = (targetString) => {
    const receivedNumber = parseInt(targetString);

    return receivedNumber;
}


console.log('C.', getReceivedNumber('100$'));