// Module ID: 14345
// Function ID: 14346
// Name: CanonicalizeUValue
// Dependencies: [14339]
// Exports: CanonicalizeUValue

// Module 14345 (CanonicalizeUValue)
import _mod14339 from "module_14339" /* 14339 */;

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod14339.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
