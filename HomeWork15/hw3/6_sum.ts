//6. Реалізувати функцію sum.

type NumberFunc = (y: number) => (z: number) => number;

const sum = (x: number): NumberFunc => y => z => x + y + z;

console.log('6:', sum(1)(2)(4))