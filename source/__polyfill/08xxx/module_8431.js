// Module ID: 8431
// Function ID: 8432
// Dependencies: []

// Module 8431
const re0 = /[|\\{}()[\]^$+*?.-]/g;

export default (str) => {
  if (typeof str !== "string") {
    const _TypeError = TypeError;
    const typeError = new TypeError("Expected a string");
    throw typeError;
  } else {
    return str.replace(re0, "\\$&");
  }
};
