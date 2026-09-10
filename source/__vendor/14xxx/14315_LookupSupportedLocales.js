// Module ID: 14315
// Function ID: 14316
// Name: LookupSupportedLocales
// Dependencies: [14316, 14327, 14328]
// Exports: match

// Module 14315 (LookupSupportedLocales)
import _mod14327 from "module_14327" /* 14327 */;

const require = globalThis.__r;

require = arg1;
const dependencyMap = arg6;

export const match = function match(arg0, arg1, arg2, algorithm) {
  closure_0 = arg2;
  const result = _mod14327.CanonicalizeLocaleList(arg0);
  let str;
  if (null != algorithm) {
    str = algorithm.algorithm;
  }
  if (!str) {
    str = "best fit";
  }
  return require("ResolveLocale").ResolveLocale(arg1, result, { localeMatcher: str }, [], {}, () => closure_0).locale;
};
export const LookupSupportedLocales = require("module_14328").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
