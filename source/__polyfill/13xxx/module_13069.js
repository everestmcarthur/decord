// Module ID: 13069
// Function ID: 13070
// Dependencies: []
// Exports: escapeStringForRegex

// Module 13069

export const escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
