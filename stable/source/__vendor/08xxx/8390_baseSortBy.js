// Module ID: 8390
// Function ID: 8391
// Name: baseSortBy
// Dependencies: []

// Module 8390 (baseSortBy)

export default function baseSortBy(arr, arg1) {
  let tmp4;
  const sorted = arr.sort(arg1);
  let diff = tmp2 - 1;
  if (+arr.length) {
    do {
      arr[diff] = arr[diff].value;
      tmp4 = +diff;
      diff = tmp4 - 1;
    } while (tmp4);
  }
  return arr;
};
