//2. HOF - High order functions

function stringsArrayMethod(arr: string[], cb: (x: string) => string): string {
    return arr.map(i => cb(i)).join('');
}

function stringsArrayCallback(x: string): string {
    return x.replace(/(?:^.)/g, string => string.toUpperCase());
}

// Першим аргументом може бути масив будь-яких рядків інших значень там немає (input validation)
console.log(stringsArrayMethod(['my', 'name', 'is', 'Vasya'], stringsArrayCallback))




function numbersFactorMethod(arr: number[], cb: (x: number) => number): string {
    return arr.map(i => cb(i)).join(', ');
}

function numbersFactorCallback(x: number): number {
    return x * 10;
}

// Першим аргументом може бути тільки масив будь-яких чисел
console.log(numbersFactorMethod([10, 20, 30], numbersFactorCallback))



interface Person {
    age: number;
    name: string;
}


function objectsHandlerMethod(arr: Person[], cb: (x: Person) => string): string {
    return arr.map(i => cb(i)).join(', ');
}

function objectsHandlerCallback(x: Person): string {
    return `${x.name} is ${x.age}`
}

// Першим аргументом тільки об'єкти такого формату
console.log(objectsHandlerMethod([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], objectsHandlerCallback))




function stringsReverseMethod(arr: string[], cb: (x: string) => string): string {
    return arr.map(i => cb(i)).join(', ');
}

function stringsReverseCallback(x: string): string {
    return x.split('').reverse().join('');
}

//Першим аргументом може бути  тільки масив рядків
console.log(stringsReverseMethod(['abc', '123'], stringsReverseCallback))