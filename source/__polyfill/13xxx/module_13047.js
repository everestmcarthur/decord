// Module ID: 13047
// Function ID: 13048
// Dependencies: []
// Exports: escapeStringForRegex

// Module 13047

export const escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
