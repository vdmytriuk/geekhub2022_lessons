//4. Переробити функцію на стрілочну
var convertToObject = function (num) { return ({ value: num, isOdd: Boolean(num % 2) }); };
console.log(convertToObject(3));
