function findMin(arr) {
  let minVal;
  arr.forEach((val, i) => {
    if (i === 0 ) minVal = val;
    if (val < minVal) minVal = val;
  });
  return minVal;
}
function findMax(arr) {
  let maxVal;
  arr.forEach((val, i) => {
    if (i === 0 ) maxVal = val;
    if (val > maxVal) maxVal = val;
  });
  return maxVal;
}

function swap(arr, index1, index2) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}
function sequentialSearch(arr, data) {
  for (let i = 0, length = arr.length; i < length; i++) {
    if (arr[i] === data && i > (length * 0.2)) {
      swap(arr, i, 0);
      return true;
    } else if (arr[i] === data) {
      return true;
    }
  }
  return false;
}

module.exports = {
  findMin,
  findMax,
  sequentialSearch,
}
