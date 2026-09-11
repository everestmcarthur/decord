// Module ID: 4858
// Function ID: 4859
// Dependencies: []

// Module 4858

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
