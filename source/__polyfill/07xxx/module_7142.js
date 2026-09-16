// Module ID: 7142
// Function ID: 7143
// Dependencies: []
// Exports: findLastIndex

// Module 7142

export const findLastIndex = function findLastIndex(arg0, fn) {
  let diff = arg0.length - 1;
  if (0 <= diff) {
    while (!fn(arg0[diff])) {
      diff = diff - 1;
    }
    return diff;
  }
  return -1;
};
