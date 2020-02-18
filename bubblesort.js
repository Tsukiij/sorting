function swap(arr) {
  let temp = 0;
  if (arr[0] > arr[1]) {
    temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
  }
  return arr;
}
let count = 0;
function bubbleSort(array) {
  if (array.length < 2) return array;
  let counter = 1;
  let end = array.length - counter;
  for (i = 0; i < end; i++) {
    let arr = [array[i], array[i + 1]];
    let [num1, num2] = swap(arr);
    count++;
    array[i] = num1;
    array[i + 1] = num2;
    counter++;
  }
  return bubbleSort(array.slice(0, end)).concat(array.slice(end));
}
