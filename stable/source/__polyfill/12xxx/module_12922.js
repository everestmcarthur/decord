// Module ID: 12922
// Function ID: 12923
// Dependencies: []
// Exports: escapeStringForRegex

// Module 12922

export const escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
