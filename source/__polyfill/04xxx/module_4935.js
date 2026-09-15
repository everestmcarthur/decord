// Module ID: 4935
// Function ID: 4936
// Dependencies: []

// Module 4935

export default function isPropertyKey(str) {
  let tmp = typeof str === "string";
  if (typeof str !== "string") {
    tmp = typeof str === "symbol";
  }
  return tmp;
};
