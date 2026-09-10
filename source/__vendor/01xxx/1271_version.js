// Module ID: 1271
// Function ID: 1272
// Name: version
// Dependencies: [1260]
// Exports: default

// Module 1271 (version)
import validateDefault from "validate" /* 1260 */;

importDefault = arg2;
const dependencyMap = arg6;

export default function version(arr) {
  if (validateDefault(arr)) {
    const _parseInt = parseInt;
    return parseInt(arr.slice(14, 15), 16);
  } else {
    const _TypeError = TypeError;
    throw TypeError("Invalid UUID");
  }
};
