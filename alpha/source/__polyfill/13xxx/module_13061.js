// Module ID: 13061
// Function ID: 13062
// Dependencies: [13045]
// Exports: _getSpanForScope, _setSpanForScope

// Module 13061
import _mod13045 from "module_13045" /* 13045 */;

require = arg1;
const dependencyMap = arg6;
const _sentrySpan = "_sentrySpan";

export const _getSpanForScope = function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
};
export const _setSpanForScope = function _setSpanForScope(arg0, arg1) {
  if (arg1) {
    const result = _mod13045.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp2[tmp];
  }
};
