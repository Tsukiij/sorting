function split(wholeArray) {
  /* your code here to define the firstHalf and secondHalf arrays */
  if (wholeArray.length <= 1) return wholeArray;
  let mid = Math.floor(wholeArray.length / 2);
  const firstHalf = wholeArray.slice(0, mid);
  const secondHalf = wholeArray.slice(mid);
  return [firstHalf, secondHalf];
}

function merge(left, right) {
  let arr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  return arr.concat(left.slice().concat(right.slice()));
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const [left, right] = split(arr);
  return merge(mergeSort(left), mergeSort(right));
}
