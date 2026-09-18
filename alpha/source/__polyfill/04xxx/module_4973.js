// Module ID: 4973
// Function ID: 4974
// Dependencies: []

// Module 4973

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
