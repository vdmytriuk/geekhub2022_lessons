//4. Переробити функцію на стрілочну

const convertToObject = num => ({value: num, isOdd: Boolean(num % 2)});

console.log(convertToObject(3))