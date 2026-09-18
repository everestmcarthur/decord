// Module ID: 1547
// Function ID: 1548
// Dependencies: []
// Exports: isArrayEqual

// Module 1547

export const isArrayEqual = function isArrayEqual(arr, arg1) {
  closure_0 = arg1;
  let tmp = arr === arg1;
  if (!tmp) {
    tmp = arr.length === arg1.length && arr.every((item, index) => Object.is(item, closure_0[index]));
    const tmp2 = arr.length === arg1.length && arr.every((item, index) => Object.is(item, closure_0[index]));
  }
  return tmp;
};
