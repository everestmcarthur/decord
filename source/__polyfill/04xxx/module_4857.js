// Module ID: 4857
// Function ID: 4858
// Dependencies: []

// Module 4857

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
