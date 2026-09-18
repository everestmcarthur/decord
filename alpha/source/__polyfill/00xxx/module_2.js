// Module ID: 2
// Function ID: 3
// Dependencies: []
// Exports: clear, fileFinishedImporting, size

// Module 2
const set = new Set();

export const clear = function clear() {
  set.clear();
};
export const size = function size() {
  return set.size;
};
export const fileFinishedImporting = function fileFinishedImporting(arg0) {
  set.add(arg0);
};
