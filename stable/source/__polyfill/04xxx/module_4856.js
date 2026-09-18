// Module ID: 4856
// Function ID: 4857
// Dependencies: []

// Module 4856

export default function isPropertyKey(str) {
  let tmp = typeof str === "string";
  if (typeof str !== "string") {
    tmp = typeof str === "symbol";
  }
  return tmp;
};
