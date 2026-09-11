// Module ID: 9740
// Function ID: 9741
// Name: escapeStringRegexp
// Dependencies: []
// Exports: default

// Module 9740 (escapeStringRegexp)

export default function escapeStringRegexp(str) {
  if (typeof str !== "string") {
    const _TypeError = TypeError;
    const typeError = new TypeError("Expected a string");
    throw typeError;
  } else {
    return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
  }
};
