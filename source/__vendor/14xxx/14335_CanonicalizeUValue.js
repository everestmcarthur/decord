// Module ID: 14335
// Function ID: 14336
// Name: CanonicalizeUValue
// Dependencies: [14329]
// Exports: CanonicalizeUValue

// Module 14335 (CanonicalizeUValue)
import _mod14329 from "module_14329" /* 14329 */;

require = arg1;
const dependencyMap = arg6;

export const CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  _mod14329.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
