const mergeSorted = (left, right, leftIndex = 0, rightIndex = 0, result = []) => {
  if (leftIndex === left.length) return [...result, ...right.slice(rightIndex)];
  if (rightIndex === right.length) return [...result, ...left.slice(leftIndex)];

  if (left[leftIndex] <= right[rightIndex]) {
    result.push(left[leftIndex]);
    return mergeSorted(left, right, leftIndex + 1, rightIndex, result);
  }

  result.push(right[rightIndex]);
  return mergeSorted(left, right, leftIndex, rightIndex + 1, result);
};

export const merge = (arr) => {
  if (arr.length <= 1) return arr;

  const middle = Math.floor(arr.length / 2);
  const leftArray = merge(arr.slice(0, middle));
  const rightArray = merge(arr.slice(middle));

  return mergeSorted(leftArray, rightArray);
};

console.log(merge([1]))