const fb = n => n <= 1 ? +n : fb(n - 1) + fb(n - 2);

console.log(fb(11))