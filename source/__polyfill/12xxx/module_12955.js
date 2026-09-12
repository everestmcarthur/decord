// Module ID: 12955
// Function ID: 12956
// Dependencies: [12932]
// Exports: getCapturedScopesOnSpan, setCapturedScopesOnSpan

// Module 12955
import _mod12932 from "module_12932" /* 12932 */;

require = arg1;
const dependencyMap = arg6;
const _sentryScope = "_sentryScope";
const _sentryIsolationScope = "_sentryIsolationScope";

export const getCapturedScopesOnSpan = function getCapturedScopesOnSpan(scope) {
  return { scope: scope[_sentryScope], isolationScope: scope[_sentryIsolationScope] };
};
export const setCapturedScopesOnSpan = function setCapturedScopesOnSpan(arg0, arg1, arg2) {
  if (arg0) {
    const result = _mod12932.addNonEnumerableProperty(arg0, _sentryIsolationScope, arg2);
    const result1 = _mod12932.addNonEnumerableProperty(arg0, _sentryScope, arg1);
  }
};
