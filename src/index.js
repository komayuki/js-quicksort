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

const quicksort = (arr, l = null, r = null) => {
  const _l = l === null ? 0 : l
  const _r = r === null ? arr.length-1 : r
  const p = pivot(arr, _l, _r)
  if (p > -1) {
    const k = partition(arr, _l, _r, arr[p])
    quicksort(arr, _l, k-1)
    quicksort(arr, k, _r)
  }
  return arr
}
module.exports = quicksort
