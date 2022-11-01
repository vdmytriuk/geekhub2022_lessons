const getWaterCells = (array) => {
  let count = 0;
  let max = array.reduce((a, b) => a > b ? a : b, -Infinity);

  let left = 0;
  let right = array.length - 1;

  let leftMax = 0;
  let rightMax = 0;

  let indexOfMaxElement = array.indexOf(max);

  while (left < indexOfMaxElement) {
    if (array[left] > leftMax) {
      leftMax = array[left];
    }
    count += Math.abs(+array[left] - (+leftMax));
    left++;
  }

  while (right > indexOfMaxElement) {
    if (array[right] > rightMax) {
      rightMax = array[right];
    }
    count += Math.abs(+array[right] - +rightMax);
    right--;
  }

  return count;
}

//HOMEWORK EXAMPLES

console.log('A.', getWaterCells([2, 5, 1, 3, 1, 2, 1, 7, 7, 6]));

console.log('B.', getWaterCells([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]));

console.log('C.', getWaterCells( [7, 0, 1, 3, 4, 1, 2, 1]));

console.log('D.', getWaterCells( [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]));

console.log('E.', getWaterCells([2, 2, 1, 2, 2, 3, 0, 1, 2]));

console.log('F.', getWaterCells([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8] ));

console.log('G.', getWaterCells([2, 2, 2, 2, 2]));

//FROM ISSUE

console.log(getWaterCells([0, 10, 10, 0, 5, 7, 2, 0]));

console.log(getWaterCells([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0, 5]));