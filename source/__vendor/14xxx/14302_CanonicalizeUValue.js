// Module ID: 14302
// Function ID: 14303
// Name: CanonicalizeUValue
// Dependencies: [14296]
// Exports: CanonicalizeUValue

// Module 14302 (CanonicalizeUValue)
import _mod14296 from "module_14296" /* 14296 */;

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod14296.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
