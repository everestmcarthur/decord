// Module ID: 4889
// Function ID: 4890
// Dependencies: []

// Module 4889

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
