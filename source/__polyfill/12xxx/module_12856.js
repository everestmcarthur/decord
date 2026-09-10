// Module ID: 12856
// Function ID: 12857
// Dependencies: [12833]
// Exports: getCapturedScopesOnSpan, setCapturedScopesOnSpan

// Module 12856
import _mod12833 from "module_12833" /* 12833 */;

require = arg1;
const dependencyMap = arg6;
const _sentryScope = "_sentryScope";
const _sentryIsolationScope = "_sentryIsolationScope";

export const getCapturedScopesOnSpan = function getCapturedScopesOnSpan(scope) {
  return { scope: scope[_sentryScope], isolationScope: scope[_sentryIsolationScope] };
};
export const setCapturedScopesOnSpan = function setCapturedScopesOnSpan(arg0, arg1, arg2) {
  if (arg0) {
    const result = _mod12833.addNonEnumerableProperty(arg0, _sentryIsolationScope, arg2);
    const result1 = _mod12833.addNonEnumerableProperty(arg0, _sentryScope, arg1);
  }
};
