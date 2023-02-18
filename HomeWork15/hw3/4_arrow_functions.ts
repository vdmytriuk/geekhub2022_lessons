//4. Переробити функцію на стрілочну

interface FuncObject {
    value: number;
    isOdd: boolean;
}

const convertToObject = (num: number): FuncObject => ({value: num, isOdd: Boolean(num % 2)});

console.log(convertToObject(3))