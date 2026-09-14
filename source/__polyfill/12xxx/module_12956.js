// Module ID: 12956
// Function ID: 12957
// Dependencies: [12933]
// Exports: getCapturedScopesOnSpan, setCapturedScopesOnSpan

// Module 12956
import _mod12933 from "module_12933" /* 12933 */;

require = arg1;
const dependencyMap = arg6;
const _sentryScope = "_sentryScope";
const _sentryIsolationScope = "_sentryIsolationScope";

export const getCapturedScopesOnSpan = function getCapturedScopesOnSpan(scope) {
  return { scope: scope[_sentryScope], isolationScope: scope[_sentryIsolationScope] };
};
export const setCapturedScopesOnSpan = function setCapturedScopesOnSpan(arg0, arg1, arg2) {
  if (arg0) {
    const result = _mod12933.addNonEnumerableProperty(arg0, _sentryIsolationScope, arg2);
    const result1 = _mod12933.addNonEnumerableProperty(arg0, _sentryScope, arg1);
  }
};
