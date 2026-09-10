// Module ID: 7326
// Function ID: 7327
// Name: sanitizeThreadName
// Dependencies: [2]
// Exports: default

// Module 7326 (sanitizeThreadName)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/sanitizeThreadName.tsx");

export default function sanitizeThreadName(str, arg1) {
  let trimmed = str;
  if (arg1) {
    trimmed = str.trim();
  }
  return trimmed;
};
