const minMaxSum = (array) => {
  const state = {
    min: Infinity,
    max: -Infinity,
    sum: 0
  }

  for (let i = 0; i < array.length; i++) {
    if (!Number.isInteger(array[i])) {
      continue;
    }

    state.sum += array[i];

    if (array[i] < state.min) {
      state.min = array[i];
    }

    if (array[i] > state.max) {
      state.max = array[i];
    }
  }


  return state;
}

// Arrays examples from task

// A.
console.log('A.', minMaxSum([3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1]));

// B.
console.log('B.', minMaxSum([-1,-8,-2]));

// C.
console.log('C.', minMaxSum([1,7,3]));

// D.
console.log('D.', minMaxSum([1,undefined,3,5,-3]));

// E.
console.log('D.', minMaxSum([1,NaN,3,5,-3]));