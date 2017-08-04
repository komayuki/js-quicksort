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

var quicksort = function quicksort(arr) {
  var l = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  var _l = l === null ? 0 : l;
  var _r = r === null ? arr.length - 1 : r;
  var p = pivot(arr, _l, _r);
  if (p > -1) {
    var k = partition(arr, _l, _r, arr[p]);
    quicksort(arr, _l, k - 1);
    quicksort(arr, k, _r);
  }
  return arr;
};
module.exports = quicksort;
