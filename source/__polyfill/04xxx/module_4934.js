// Module ID: 4934
// Function ID: 4935
// Dependencies: []

// Module 4934

export default function isPropertyKey(str) {
  let tmp = typeof str === "string";
  if (typeof str !== "string") {
    tmp = typeof str === "symbol";
  }
  return tmp;
};
