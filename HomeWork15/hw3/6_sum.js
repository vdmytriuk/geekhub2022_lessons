//6. Реалізувати функцію sum.
var sum = function (x) { return function (y) { return function (z) { return x + y + z; }; }; };
console.log('6:', sum(1)(2)(4));
