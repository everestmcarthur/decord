// Module ID: 8519
// Function ID: 8520
// Name: baseSortBy
// Dependencies: []

// Module 8519 (baseSortBy)

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
