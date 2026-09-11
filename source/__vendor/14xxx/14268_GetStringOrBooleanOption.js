// Module ID: 14268
// Function ID: 14269
// Name: GetStringOrBooleanOption
// Dependencies: [14259]
// Exports: GetStringOrBooleanOption

// Module 14268 (GetStringOrBooleanOption)
import _mod14259 from "module_14259" /* 14259 */;

require = arg1;
const dependencyMap = arg6;

export const GetStringOrBooleanOption = function GetStringOrBooleanOption(result1, useGrouping, arg2, always, arg4, min2) {
  if (undefined === result1[useGrouping]) {
    return min2;
  } else if (true === tmp) {
    return always;
  } else {
    const _Boolean = Boolean;
    if (false === Boolean(tmp)) {
      return arg4;
    } else {
      const str1 = _mod14259.ToString(tmp);
      if ("true" !== str1) {
        if ("false" !== str1) {
          let items = arg2;
          if (!arg2) {
            items = [];
          }
          if (-1 === items.indexOf(str1)) {
            const _RangeError = RangeError;
            const concat = "Invalid value ".concat;
            const rangeError = new RangeError("Invalid value ".concat(str1));
            throw rangeError;
          } else {
            return str1;
          }
        }
      }
      return min2;
    }
  }
};
