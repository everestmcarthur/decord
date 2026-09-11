// Module ID: 14310
// Function ID: 14311
// Name: SupportedLocales
// Dependencies: [14259, 14266, 14293]
// Exports: SupportedLocales

// Module 14310 (SupportedLocales)
import _mod14259 from "module_14259" /* 14259 */;
import GetOption from "GetOption" /* 14266 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 14293 */;

require = arg1;
const dependencyMap = arg6;

export const SupportedLocales = function SupportedLocales(arg0, arg1, arg2) {
  let str = "best fit";
  if (undefined !== arg2) {
    const ToObjectResult = _mod14259.ToObject(arg2);
    str = GetOption.GetOption(ToObjectResult, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
  }
  if ("best fit" === str) {
    const _Array2 = Array;
    return LookupSupportedLocales.LookupSupportedLocales(Array.from(arg0), arg1);
  } else {
    const _Array = Array;
    return LookupSupportedLocales.LookupSupportedLocales(Array.from(arg0), arg1);
  }
};
