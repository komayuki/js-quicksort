'use strict';

function pivot(arr, i, j) {
  var k = i + 1;
  while (k <= j && arr[i] === arr[k]) {
    k++;
  }
  if (k > j) {
    return -1;
  }
  if (arr[i] >= arr[k]) {
    return i;
  }
  return k;
}
//var list = [2, 5, 1]

function partition(arr, i, j, p) {
  var l = i,
      r = j;
  while (l <= r) {
    while (l <= j && arr[l] < p) {
      l++;
    }
    while (r >= i && arr[r] >= p) {
      r--;
    }
    if (l > r) {
      break;
    }
    var tmp = arr[l];
    arr[l] = arr[r];
    arr[r] = tmp;
    l++;
    r--;
  }
  return l;
}

var quicksort = function quicksort(arr, l, r) {
  var p = pivot(arr, l, r);
  if (p > -1) {
    var k = partition(arr, l, r, arr[p]);
    quicksort(arr, l, k - 1);
    quicksort(arr, k, r);
  }
  return arr;
};
module.exports = quicksort;
