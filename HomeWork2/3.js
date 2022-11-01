const guessNumber = (n) => {
  if (!Number.isInteger(n)) {
    return new Error("Please provide a valid number");
  }

  if (n < 1 || n > 10) {
    return new Error("Please provide number in range 1 - 10");
  }

  const generatedNumber = Math.floor(Math.random() * 10 + 1);

  if (generatedNumber === n) {
    return 'You Win';
  }

  return `You lose , your number is ${n}, the random number is ${generatedNumber}`;
}

console.log(guessNumber(4));