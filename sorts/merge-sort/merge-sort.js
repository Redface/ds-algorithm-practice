function mergeSort(arr) {
  if (arr.length === 1) return arr;
  const middle = Math.floor(arr.length / 2);
  const leftArr = arr.splice(0, middle);
  const rightArr = arr;
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  const mergedArr = [];
  let indexLeft = 0, indexRight = 0;
  while (indexLeft < leftArr.length && indexRight < rightArr.length) {
    if (leftArr[indexLeft] < rightArr[indexRight]) {
      mergedArr.push(leftArr[indexLeft]); 
      indexLeft++;
    } else {
      mergedArr.push(rightArr[indexRight]); 
      indexRight++;
    }
  }
  return mergedArr.concat(leftArr.slice(indexLeft)).concat(rightArr.slice(indexRight));
}
