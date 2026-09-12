// Module ID: 14326
// Function ID: 14327
// Name: LookupSupportedLocales
// Dependencies: [14327, 14338, 14339]
// Exports: match

// Module 14326 (LookupSupportedLocales)
import _mod14338 from "module_14338" /* 14338 */;

const require = globalThis.__r;

require = arg1;
const dependencyMap = arg6;

export const match = function match(arg0, arg1, arg2, algorithm) {
  closure_0 = arg2;
  const result = _mod14338.CanonicalizeLocaleList(arg0);
  let str;
  if (null != algorithm) {
    str = algorithm.algorithm;
  }
  if (!str) {
    str = "best fit";
  }
  return require("ResolveLocale").ResolveLocale(arg1, result, { localeMatcher: str }, [], {}, () => closure_0).locale;
};
export const LookupSupportedLocales = require("module_14339").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
