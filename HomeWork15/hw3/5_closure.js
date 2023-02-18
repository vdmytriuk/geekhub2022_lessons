//5.1 Створити функцію яка зможе так робити:
var minus = function (x) { return function (y) { return x - y; }; };
console.log('5.1:', minus(5)(6));
//5.2 Створити функція яка множить і вміє запам'ятовувати результат між викликами
var multiplyMaker = function (x) { return function (y) { return x *= y; }; };
var multiply = multiplyMaker(2);
console.log('5.2:', multiply(2), multiply(1), multiply(3), multiply(10));
var stringsHandler = function () {
    var str;
    var methods = {
        setValue: function (val) {
            str = val.toString();
        },
        getValue: function () {
            return str;
        },
        getReversedValue: function () {
            return str.split('').reverse().join('');
        },
        getStrLength: function () {
            return str.length;
        }
    };
    return methods;
};
var stringsModule = stringsHandler();
stringsModule.setValue('abcde');
console.log('5.3:', stringsModule.getValue(), stringsModule.getReversedValue(), stringsModule.getStrLength());
var calculateHandler = function () {
    var n;
    var methods = {
        setValue: function (x) {
            n = x;
            return this;
        },
        getValue: function () {
            return n;
        },
        plus: function (x) {
            n += x;
            return this;
        },
        minus: function (x) {
            n -= x;
            return this;
        },
        multiply: function (x) {
            n *= x;
            return this;
        },
        division: function (x) {
            n /= x;
            return this;
        },
        square: function (x) {
            n = Math.pow(n, x);
            return this;
        }
    };
    return methods;
};
var calculator = calculateHandler();
console.log('5.4:', calculator.setValue(5).square(2).plus(3).minus(2).multiply(2).division(4).getValue());
