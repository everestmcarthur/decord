// Module ID: 14422
// Function ID: 14423
// Name: CoerceOptionsToObject
// Dependencies: [14423]
// Exports: CoerceOptionsToObject

// Module 14422 (CoerceOptionsToObject)
import _mod14423 from "module_14423" /* 14423 */;

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod14423.ToObject(arg0);
  }
};
