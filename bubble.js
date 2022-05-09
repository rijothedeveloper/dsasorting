function bubbleSort(arr) {
  for (let j = 0; j < arr.length - 1; j++) {
    let swap = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swap = true;
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
    if (!swap) {
      break;
    }
    swap = false;
  }
  return arr;
}

module.exports = bubbleSort;
