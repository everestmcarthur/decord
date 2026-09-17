// Module ID: 14371
// Function ID: 14372
// Name: CanonicalizeUValue
// Dependencies: [14365]
// Exports: CanonicalizeUValue

// Module 14371 (CanonicalizeUValue)
import _mod14365 from "module_14365" /* 14365 */;

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod14365.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
