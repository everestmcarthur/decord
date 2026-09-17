// Module ID: 12970
// Function ID: 12971
// Dependencies: [12954]
// Exports: _getSpanForScope, _setSpanForScope

// Module 12970
import _mod12954 from "module_12954" /* 12954 */;

require = arg1;
const dependencyMap = arg6;
const _sentrySpan = "_sentrySpan";

export const _getSpanForScope = function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
};
export const _setSpanForScope = function _setSpanForScope(arg0, arg1) {
  if (arg1) {
    const result = _mod12954.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp2[tmp];
  }
};
