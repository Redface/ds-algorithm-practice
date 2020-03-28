function binarySearch(arr, data) {
  let upperBound = arr.length - 1;
  let lowerBound = 0;
  while (lowerBound <= upperBound) {
    const mid = Math.floor((upperBound + lowerBound) / 2);
    const val = arr[mid];
    if (val < data) {
      lowerBound = mid + 1;
    } else if (val > data) {
      upperBound = mid - 1;
    } else {
     return mid;
    }
  }
  return -1;
}
function countData(arr, data) {
  let count = 0;
  const position = binarySearch(arr, data);
  if (position > -1) {
    count++;
    for (let i = position - 1; i >= 0; i--) {
      if (arr[i] !== data) break;
      count++;
    }
    for (let i = position + 1, length = arr.length; i < length; i++) {
      if (arr[i] !== data) break;
      count++;
    }
  }
  return count;
}
module.exports = {
  binarySearch,
  countData,
}

console.log(countData([1,1,1,1, 2], 1));
