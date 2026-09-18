// Module ID: 13160
// Function ID: 13161
// Dependencies: []
// Exports: escapeStringForRegex

// Module 13160

export const escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
