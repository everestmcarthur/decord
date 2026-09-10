// Module ID: 12849
// Function ID: 12850
// Dependencies: [12833]
// Exports: _getSpanForScope, _setSpanForScope

// Module 12849
import _mod12833 from "module_12833" /* 12833 */;

require = arg1;
const dependencyMap = arg6;
const _sentrySpan = "_sentrySpan";

export const _getSpanForScope = function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
};
export const _setSpanForScope = function _setSpanForScope(arg0, arg1) {
  if (arg1) {
    const result = _mod12833.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp2[tmp];
  }
};
