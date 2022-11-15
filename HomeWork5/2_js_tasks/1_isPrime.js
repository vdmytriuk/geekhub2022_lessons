const isPrime = n => {
    if (n <= 1) return false;

    for (let i = 2, sq = Math.sqrt(n); i <= sq; i++) {
        if(n % i === 0) return false;
    }

    return true;
}

console.log(isPrime(22))