// Module ID: 13011
// Function ID: 13012
// Dependencies: []
// Exports: escapeStringForRegex

// Module 13011

export const escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
