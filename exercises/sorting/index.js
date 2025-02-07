// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j
      }
    }
    if (indexOfMin !== i) {
      let temp = arr[indexOfMin]
      arr[indexOfMin] = arr[i]
      arr[i] = temp
    }
  }

  return arr
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr
  }
  const center = Math.floor(arr.length / 2)
  const left = arr.slice(0, center)
  const right = arr.slice(center)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  const arr = []
  while (left.length && right.length) {
    arr.push(left[0] < right[0] ? left.shift() : right.shift())
  }
  return [...arr, ...left, ...right]
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge }
