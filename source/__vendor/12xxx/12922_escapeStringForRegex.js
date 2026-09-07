// Module ID: 12922
// Function ID: 12923
// Name: escapeStringForRegex
// Dependencies: []

// Module 12922 (escapeStringForRegex)
arg5.escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
