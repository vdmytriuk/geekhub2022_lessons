const missing = arr => {
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    const fullNumbersArray = [];

    for (let i = min; i <= max; i++) {
        fullNumbersArray.push(i);
    }

    const missingNumber = fullNumbersArray.find(n => !arr.includes(n));

    if (missingNumber === undefined && min === 2) {
        return 1;
    }

    return missingNumber;
}

console.log(missing([]));                         // undefined
console.log(missing([1, 4, 3]));                  // 2
console.log(missing([2, 3, 4]));                  // 1
console.log(missing([5, 1, 4, 2]));               // 3
console.log(missing([1, 2, 3, 4]));               // undefined

