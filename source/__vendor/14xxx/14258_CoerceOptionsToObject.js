// Module ID: 14258
// Function ID: 14259
// Name: CoerceOptionsToObject
// Dependencies: [14259]
// Exports: CoerceOptionsToObject

// Module 14258 (CoerceOptionsToObject)
import _mod14259 from "module_14259" /* 14259 */;

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod14259.ToObject(arg0);
  }
};
