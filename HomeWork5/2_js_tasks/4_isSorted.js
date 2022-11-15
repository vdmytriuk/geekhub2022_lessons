const isSorted = arr => !!arr.reduce((accum, current) => accum !== false && current >= accum && current);

console.log(isSorted([3, 9, -3, 10]))