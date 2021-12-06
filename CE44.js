function bubbleSort(arr, comparator) {
  if (typeof comparator !== "function") {
    let isDone = true;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > arr[index + 1]) {
            let firstEl = arr[index];
            arr[index] = arr[index + 1]
            arr[index + 1] = firstEl
            isDone = false
        }
    }
    return isDone? arr : bubbleSort(arr, comparator)
  }
  let isDone = true;
  for (let index = 0; index < arr.length; index++) {
      if (typeof arr[index] !== 'string' && typeof arr[index + 1] !== 'string' && typeof arr[index + 1] !== undefined) {
          if (arr[index + 1] !== undefined) {
            if (comparator(arr[index], arr[index + 1]) > 0) {
                let firstEl = arr[index];
                arr[index] = arr[index + 1]
                arr[index + 1] = firstEl
                isDone = false
            }
          }
      } else {
        if (comparator(arr[index], arr[index + 1]) === 1) {
            let firstEl = arr[index];
            arr[index] = arr[index + 1]
            arr[index + 1] = firstEl
            isDone = false
        }
      }
  }
  return isDone? arr : bubbleSort(arr, comparator)
}