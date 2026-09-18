// Module ID: 12823
// Function ID: 12824
// Dependencies: [12807]
// Exports: _getSpanForScope, _setSpanForScope

// Module 12823
import _mod12807 from "module_12807" /* 12807 */;

require = arg1;
const dependencyMap = arg6;
const _sentrySpan = "_sentrySpan";

export const _getSpanForScope = function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
};
export const _setSpanForScope = function _setSpanForScope(arg0, arg1) {
  if (arg1) {
    const result = _mod12807.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp2[tmp];
  }
};
