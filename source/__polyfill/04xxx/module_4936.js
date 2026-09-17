// Module ID: 4936
// Function ID: 4937
// Dependencies: []

// Module 4936

export default function isPropertyKey(str) {
  let tmp = typeof str === "string";
  if (typeof str !== "string") {
    tmp = typeof str === "symbol";
  }
  return tmp;
};
