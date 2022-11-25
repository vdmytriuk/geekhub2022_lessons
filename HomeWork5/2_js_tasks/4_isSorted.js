const isSorted = arr => arr.length !== 0
    ? !!arr.reduce((accum, current) => accum !== false && current >= accum && current)
    : true

console.log(isSorted([]))