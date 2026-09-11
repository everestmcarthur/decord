// Module ID: 12921
// Function ID: 12922
// Dependencies: [12898]
// Exports: getCapturedScopesOnSpan, setCapturedScopesOnSpan

// Module 12921
import _mod12898 from "module_12898" /* 12898 */;

require = arg1;
const dependencyMap = arg6;
const _sentryScope = "_sentryScope";
const _sentryIsolationScope = "_sentryIsolationScope";

export const getCapturedScopesOnSpan = function getCapturedScopesOnSpan(scope) {
  return { scope: scope[_sentryScope], isolationScope: scope[_sentryIsolationScope] };
};
export const setCapturedScopesOnSpan = function setCapturedScopesOnSpan(arg0, arg1, arg2) {
  if (arg0) {
    const result = _mod12898.addNonEnumerableProperty(arg0, _sentryIsolationScope, arg2);
    const result1 = _mod12898.addNonEnumerableProperty(arg0, _sentryScope, arg1);
  }
};
