// Module ID: 12948
// Function ID: 12949
// Dependencies: []
// Exports: escapeStringForRegex

// Module 12948

export const escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
