//5.1 Створити функцію яка зможе так робити:

type NumberFunc = (y: number) => number

const minus = (x: number): NumberFunc => (y) => x - y;

console.log('5.1:', minus(5)(6));



//5.2 Створити функція яка множить і вміє запам'ятовувати результат між викликами

const multiplyMaker = (x: number): NumberFunc => (y) => x *= y;

const multiply = multiplyMaker(2);

console.log('5.2:', multiply(2), multiply(1), multiply(3), multiply(10));



//5.3 Створити модуль який може працювати з рядком

interface StringMethods {
    setValue: (val: string) => void;
    getValue: () => string;
    getReversedValue: () => string;
    getStrLength: () => number;
}

const stringsHandler = (): StringMethods => {
    let str: string;

    const methods: StringMethods = {
        setValue(val) {
            str = val.toString();
        },

        getValue() {
            return str;
        },

        getReversedValue() {
            return str.split('').reverse().join('');
        },

        getStrLength() {
            return str.length;
        }
    }

    return methods;
}

const stringsModule = stringsHandler();

stringsModule.setValue('abcde')

console.log('5.3:', stringsModule.getValue(), stringsModule.getReversedValue(), stringsModule.getStrLength());



//5.4 Створити модуль калькулятор, який може додавати, віднімати, множити, ділити, і приводити до ступеню(степени).

interface NumberMethods {
    setValue: (x: number) => this;
    getValue: () => number;
    plus: (x: number) => this;
    minus: (x: number) => this;
    multiply: (x: number) => this;
    division: (x: number) => this;
    square: (x: number) => this;
}

const calculateHandler = (): NumberMethods => {
    let n: number;

    const methods: NumberMethods = {
        setValue(x) {
            n = x;
            return this;
        },

        getValue() {
            return n;
        },

        plus(x) {
            n += x;
            return this;
        },

        minus(x) {
            n -= x;
            return this;
        },

        multiply(x) {
            n *= x;
            return this;
        },

        division(x) {
            n /= x;
            return this;
        },

        square(x) {
            n **= x;
            return this;
        }
    }

    return methods;
}

const calculator = calculateHandler();

console.log('5.4:', calculator.setValue(5).square(2).plus(3).minus(2).multiply(2).division(4).getValue())

