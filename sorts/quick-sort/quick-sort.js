//function quickSort(arr) {
//  if (arr.length === 0) return arr;
//
//  const pivot = arr[0];
//  const leftArr = [];
//  const rightArr = [];
//  
//  for (let i = 1, length = arr.length; i < length; i++) {
//    const val = arr[i];
//    val < pivot ? leftArr.push(val) : rightArr.push(val);
//  }
//  return quickSort(leftArr).concat(pivot, quickSort(rightArr));
//}
function quickSort(arr) {
  if (arr.length === 0) return arr;

  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];
  const leftArr = [];
  const rightArr = [];
  
  for (let i = 0, length = arr.length; i < length; i++) {
    if (i === pivotIndex) continue;
    const val = arr[i];
    val < pivot ? leftArr.push(val) : rightArr.push(val);
  }
  return quickSort(leftArr).concat(pivot, quickSort(rightArr));
}

module.exports = quickSort;
