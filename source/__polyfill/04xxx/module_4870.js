// Module ID: 4870
// Function ID: 4871
// Dependencies: []

// Module 4870

export default function isPropertyKey(str) {
  let tmp = typeof str === "string";
  if (typeof str !== "string") {
    tmp = typeof str === "symbol";
  }
  return tmp;
};
