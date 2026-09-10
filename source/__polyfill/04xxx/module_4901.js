// Module ID: 4901
// Function ID: 4902
// Dependencies: []

// Module 4901

export default function isPropertyKey(str) {
  let tmp = typeof str === "string";
  if (typeof str !== "string") {
    tmp = typeof str === "symbol";
  }
  return tmp;
};
