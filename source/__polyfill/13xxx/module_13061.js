// Module ID: 13061
// Function ID: 13062
// Dependencies: []
// Exports: escapeStringForRegex

// Module 13061

export const escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
