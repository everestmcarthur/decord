// Module ID: 13053
// Function ID: 13054
// Dependencies: []
// Exports: escapeStringForRegex

// Module 13053

export const escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
