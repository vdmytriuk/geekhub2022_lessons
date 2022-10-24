const reverseString = (str) => {
  return String(str).split('').reverse().join('');
}

console.log(reverseString(undefined))