function split(wholeArray) {
  /* your code here to define the firstHalf and secondHalf arrays */
  if (wholeArray.length <= 1) return wholeArray;
  let mid = Math.floor(wholeArray.length / 2);
  const firstHalf = wholeArray.slice(0, mid);
  const secondHalf = wholeArray.slice(mid);
  return [firstHalf, secondHalf];
}

function mergeSort(array) {
  let p = 0;
  let r = array.length;
  let [left, right] = split(array);
  if (left.length === 1 && right.length === 1) {
    console.log(left, right);
    return left[0] < right[0] ? [left[0], right[0]] : [right[0], left[0]];
  } else {
    return mergeSort(left).concat(mergeSort(right));
  }
}
