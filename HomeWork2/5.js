const getWaterCells = (array) => {
  let count = 0;
  let max = array.reduce((a, b) => a > b ? a : b);

  let left = 0;
  let right = array.at(-1);

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

console.log(getWaterCells([2, 5, 1, 3, 1, 2, 1, 7, 7, 6]));