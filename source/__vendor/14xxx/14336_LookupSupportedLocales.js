// Module ID: 14336
// Function ID: 14337
// Name: LookupSupportedLocales
// Dependencies: [14337, 14348, 14349]
// Exports: match

// Module 14336 (LookupSupportedLocales)
import _mod14348 from "module_14348" /* 14348 */;

const require = globalThis.__r;

require = arg1;
const dependencyMap = arg6;

export const match = function match(arg0, arg1, arg2, algorithm) {
  closure_0 = arg2;
  const result = _mod14348.CanonicalizeLocaleList(arg0);
  let str;
  if (null != algorithm) {
    str = algorithm.algorithm;
  }
  if (!str) {
    str = "best fit";
  }
  return require("ResolveLocale").ResolveLocale(arg1, result, { localeMatcher: str }, [], {}, () => closure_0).locale;
};
export const LookupSupportedLocales = require("module_14349").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
