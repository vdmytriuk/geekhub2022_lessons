const reverse = str => str.split('').reduceRight((accum, current) => accum + current, '');

console.log(reverse('test'))