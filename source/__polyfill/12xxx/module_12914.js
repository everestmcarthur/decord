// Module ID: 12914
// Function ID: 12915
// Dependencies: [12898]
// Exports: _getSpanForScope, _setSpanForScope

// Module 12914
import _mod12898 from "module_12898" /* 12898 */;

require = arg1;
const dependencyMap = arg6;
const _sentrySpan = "_sentrySpan";

export const _getSpanForScope = function _getSpanForScope(arg0) {
  return arg0[_sentrySpan];
};
export const _setSpanForScope = function _setSpanForScope(arg0, arg1) {
  if (arg1) {
    const result = _mod12898.addNonEnumerableProperty(arg0, _sentrySpan, arg1);
  } else {
    delete tmp2[tmp];
  }
};
