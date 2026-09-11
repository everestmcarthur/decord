// Module ID: 4902
// Function ID: 4903
// Dependencies: []

// Module 4902

export default function isPropertyKey(str) {
  let tmp = typeof str === "string";
  if (typeof str !== "string") {
    tmp = typeof str === "symbol";
  }
  return tmp;
};
