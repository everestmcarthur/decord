// Module ID: 4890
// Function ID: 4891
// Dependencies: []

// Module 4890

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
