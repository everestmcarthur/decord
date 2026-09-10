// Module ID: 14275
// Function ID: 14276
// Name: CanonicalizeUValue
// Dependencies: [14269]
// Exports: CanonicalizeUValue

// Module 14275 (CanonicalizeUValue)
import _mod14269 from "module_14269" /* 14269 */;

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod14269.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
