// Module ID: 12949
// Function ID: 12950
// Dependencies: [12933]
// Exports: _getSpanForScope, _setSpanForScope

// Module 12949
import _mod12933 from "module_12933" /* 12933 */;

require = arg1;
const dependencyMap = arg6;
const _sentrySpan = "_sentrySpan";

export const _getSpanForScope = function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
};
export const _setSpanForScope = function _setSpanForScope(arg0, arg1) {
  if (arg1) {
    const result = _mod12933.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp2[tmp];
  }
};
