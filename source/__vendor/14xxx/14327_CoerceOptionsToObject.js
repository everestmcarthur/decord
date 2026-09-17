// Module ID: 14327
// Function ID: 14328
// Name: CoerceOptionsToObject
// Dependencies: [14328]
// Exports: CoerceOptionsToObject

// Module 14327 (CoerceOptionsToObject)
import _mod14328 from "module_14328" /* 14328 */;

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod14328.ToObject(arg0);
  }
};
