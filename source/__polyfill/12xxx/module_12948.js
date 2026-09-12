// Module ID: 12948
// Function ID: 12949
// Dependencies: [12932]
// Exports: _getSpanForScope, _setSpanForScope

// Module 12948
import _mod12932 from "module_12932" /* 12932 */;

require = arg1;
const dependencyMap = arg6;
const _sentrySpan = "_sentrySpan";

export const _getSpanForScope = function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
};
export const _setSpanForScope = function _setSpanForScope(arg0, arg1) {
  if (arg1) {
    const result = _mod12932.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp2[tmp];
  }
};
