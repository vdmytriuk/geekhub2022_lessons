//2. HOF - High order functions
function stringsArrayMethod(arr, cb) {
    return arr.map(function (i) { return cb(i); }).join('');
}
function stringsArrayCallback(x) {
    return x.replace(/(?:^.)/g, function (string) { return string.toUpperCase(); });
}
// Першим аргументом може бути масив будь-яких рядків інших значень там немає (input validation)
console.log(stringsArrayMethod(['my', 'name', 'is', 'Vasya'], stringsArrayCallback));
function numbersFactorMethod(arr, cb) {
    return arr.map(function (i) { return cb(i); }).join(', ');
}
function numbersFactorCallback(x) {
    return x * 10;
}
// Першим аргументом може бути тільки масив будь-яких чисел
console.log(numbersFactorMethod([10, 20, 30], numbersFactorCallback));
function objectsHandlerMethod(arr, cb) {
    return arr.map(function (i) { return cb(i); }).join(', ');
}
function objectsHandlerCallback(x) {
    return "".concat(x.name, " is ").concat(x.age);
}
// Першим аргументом тільки об'єкти такого формату
console.log(objectsHandlerMethod([{ age: 45, name: 'Jhon' }, { age: 20, name: 'Aaron' }], objectsHandlerCallback));
function stringsReverseMethod(arr, cb) {
    return arr.map(function (i) { return cb(i); }).join(', ');
}
function stringsReverseCallback(x) {
    return x.split('').reverse().join('');
}
//Першим аргументом може бути  тільки масив рядків
console.log(stringsReverseMethod(['abc', '123'], stringsReverseCallback));
