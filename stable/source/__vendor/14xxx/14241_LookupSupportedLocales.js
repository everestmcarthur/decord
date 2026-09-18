// Module ID: 14241
// Function ID: 14242
// Name: LookupSupportedLocales
// Dependencies: [14242, 14253, 14254]
// Exports: match

// Module 14241 (LookupSupportedLocales)
import _mod14253 from "module_14253" /* 14253 */;

const require = globalThis.__r;

require = arg1;
const dependencyMap = arg6;

export const match = function match(arg0, arg1, arg2, algorithm) {
  closure_0 = arg2;
  const result = _mod14253.CanonicalizeLocaleList(arg0);
  let str;
  if (null != algorithm) {
    str = algorithm.algorithm;
  }
  if (!str) {
    str = "best fit";
  }
  return require("ResolveLocale").ResolveLocale(arg1, result, { localeMatcher: str }, [], {}, () => closure_0).locale;
};
export const LookupSupportedLocales = require("module_14254").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
