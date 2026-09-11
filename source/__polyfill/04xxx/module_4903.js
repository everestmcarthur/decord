// Module ID: 4903
// Function ID: 4904
// Dependencies: []

// Module 4903

export default function isPropertyKey(str) {
  let tmp = typeof str === "string";
  if (typeof str !== "string") {
    tmp = typeof str === "symbol";
  }
  return tmp;
};
