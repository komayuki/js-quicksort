function pivot (arr, i, j) {
  let k = i + 1
  while (k <= j && arr[i] === arr[k]) {
    k++
  }
  if (k > j) {
    return -1
  }
  if (arr[i] >= arr[k]){
    return i
  }
  return k
}
//var list = [2, 5, 1]

function partition(arr, i, j, p) {
  var l = i, r = j;
  while (l <= r) {
    while (l <= j && arr[l] < p) {
      l++
    }
    while (r >= i && arr[r] >= p) {
      r--
    }
    if (l > r) {
      break
    }
    const tmp = arr[l]
    arr[l] = arr[r]
    arr[r] = tmp
    l++
    r--
  }
  return l;
}

const quicksort = (arr, l, r) => {
  const p = pivot(arr, l, r)
  if (p > -1) {
    const k = partition(arr, l, r, arr[p])
    quicksort(arr, l, k-1)
    quicksort(arr, k, r)
  }
  return arr
}
module.exports = quicksort
