// Module ID: 12954
// Function ID: 12955
// Dependencies: [12938]
// Exports: _getSpanForScope, _setSpanForScope

// Module 12954
import _mod12938 from "module_12938" /* 12938 */;

require = arg1;
const dependencyMap = arg6;
const _sentrySpan = "_sentrySpan";

export const _getSpanForScope = function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
};
export const _setSpanForScope = function _setSpanForScope(arg0, arg1) {
  if (arg1) {
    const result = _mod12938.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp2[tmp];
  }
};
