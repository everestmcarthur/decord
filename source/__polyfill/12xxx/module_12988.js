// Module ID: 12988
// Function ID: 12989
// Dependencies: []
// Exports: escapeStringForRegex

// Module 12988

export const escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
