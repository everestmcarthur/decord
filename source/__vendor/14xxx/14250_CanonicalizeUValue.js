// Module ID: 14250
// Function ID: 14251
// Name: CanonicalizeUValue
// Dependencies: [14244]

// Module 14250 (CanonicalizeUValue)
import isMatched from "isMatched" /* 14244 */;

require = arg1;
const dependencyMap = arg6;
arg5.CanonicalizeUValue = function CanonicalizeUValue(formatted, str) {
  formatted = str.toLowerCase();
  isMatched.invariant(undefined !== formatted, "ukey must be defined");
  return formatted;
};
