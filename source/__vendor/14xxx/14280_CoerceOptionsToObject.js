// Module ID: 14280
// Function ID: 14281
// Name: CoerceOptionsToObject
// Dependencies: [14281]
// Exports: CoerceOptionsToObject

// Module 14280 (CoerceOptionsToObject)
import _mod14281 from "module_14281" /* 14281 */;

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod14281.ToObject(arg0);
  }
};
