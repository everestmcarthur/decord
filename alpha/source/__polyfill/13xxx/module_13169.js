// Module ID: 13169
// Function ID: 13170
// Dependencies: []
// Exports: escapeStringForRegex

// Module 13169

export const escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
