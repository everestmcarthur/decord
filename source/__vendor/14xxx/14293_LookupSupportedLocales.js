// Module ID: 14293
// Function ID: 14294
// Name: LookupSupportedLocales
// Dependencies: [14294, 14305, 14306]
// Exports: match

// Module 14293 (LookupSupportedLocales)
import _mod14305 from "module_14305" /* 14305 */;

const require = globalThis.__r;

require = arg1;
const dependencyMap = arg6;

export const match = function match(arg0, arg1, arg2, algorithm) {
  closure_0 = arg2;
  const result = _mod14305.CanonicalizeLocaleList(arg0);
  let str;
  if (null != algorithm) {
    str = algorithm.algorithm;
  }
  if (!str) {
    str = "best fit";
  }
  return require("ResolveLocale").ResolveLocale(arg1, result, { localeMatcher: str }, [], {}, () => closure_0).locale;
};
export const LookupSupportedLocales = require("module_14306").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
