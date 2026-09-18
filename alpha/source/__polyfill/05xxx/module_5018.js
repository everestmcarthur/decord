// Module ID: 5018
// Function ID: 5019
// Dependencies: []

// Module 5018

export default function isPropertyKey(str) {
  let tmp = typeof str === "string";
  if (typeof str !== "string") {
    tmp = typeof str === "symbol";
  }
  return tmp;
};
