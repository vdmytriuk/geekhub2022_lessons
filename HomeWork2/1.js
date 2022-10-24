const multiple = (...args) => {
  return args.reduce((accum, current) => accum * current, 1);
}

console.log(multiple(2, 4, 8, 5));