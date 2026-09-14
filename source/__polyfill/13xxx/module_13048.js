// Module ID: 13048
// Function ID: 13049
// Dependencies: []
// Exports: escapeStringForRegex

// Module 13048

export const escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
