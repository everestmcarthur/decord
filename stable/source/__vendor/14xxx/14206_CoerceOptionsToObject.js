// Module ID: 14206
// Function ID: 14207
// Name: CoerceOptionsToObject
// Dependencies: [14207]
// Exports: CoerceOptionsToObject

// Module 14206 (CoerceOptionsToObject)
import _mod14207 from "module_14207" /* 14207 */;

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod14207.ToObject(arg0);
  }
};
