// Module ID: 14241
// Function ID: 14242
// Name: match
// Dependencies: [14242, 14253, 14254]

// Module 14241 (match)
const require = arg1;
const dependencyMap = arg6;
arg5.LookupSupportedLocales = undefined;
arg5.ResolveLocale = undefined;
arg5.match = function match(arg0, arg1, arg2, algorithm) {
  const _require = arg2;
  const result = _require(14253).CanonicalizeLocaleList(arg0);
  let str;
  if (null != algorithm) {
    str = algorithm.algorithm;
  }
  if (!str) {
    str = "best fit";
  }
  return _require(14242).ResolveLocale(arg1, result, { localeMatcher: str }, [], {}, () => closure_0).locale;
};
let obj = {
  enumerable: true,
  get() {
    return require(14254) /* LookupSupportedLocales */.LookupSupportedLocales;
  }
};
Object.defineProperty(arg5, "LookupSupportedLocales", obj);
obj = {
  enumerable: true,
  get() {
    return require(14242) /* ResolveLocale */.ResolveLocale;
  }
};
Object.defineProperty(arg5, "ResolveLocale", obj);
