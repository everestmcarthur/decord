// Module ID: 12889
// Function ID: 12890
// Dependencies: [12873]
// Exports: _getSpanForScope, _setSpanForScope

// Module 12889
import _mod12873 from "module_12873" /* 12873 */;

require = arg1;
const dependencyMap = arg6;
const _sentrySpan = "_sentrySpan";

export const _getSpanForScope = function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
};
export const _setSpanForScope = function _setSpanForScope(arg0, arg1) {
  if (arg1) {
    const result = _mod12873.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp2[tmp];
  }
};
