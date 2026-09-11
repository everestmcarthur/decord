// Module ID: 13013
// Function ID: 13014
// Dependencies: []
// Exports: escapeStringForRegex

// Module 13013

export const escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
