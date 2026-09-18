// Module ID: 7470
// Function ID: 7471
// Name: sanitizeThreadName
// Dependencies: [2]
// Exports: default

// Module 7470 (sanitizeThreadName)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/sanitizeThreadName.tsx");

export default function sanitizeThreadName(str, arg1) {
  let trimmed = str;
  if (arg1) {
    trimmed = str.trim();
  }
  return trimmed;
};
