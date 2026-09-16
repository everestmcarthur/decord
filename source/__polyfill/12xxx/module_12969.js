// Module ID: 12969
// Function ID: 12970
// Dependencies: [12946]
// Exports: getCapturedScopesOnSpan, setCapturedScopesOnSpan

// Module 12969
import _mod12946 from "module_12946" /* 12946 */;

require = arg1;
const dependencyMap = arg6;
const _sentryScope = "_sentryScope";
const _sentryIsolationScope = "_sentryIsolationScope";

export const getCapturedScopesOnSpan = function getCapturedScopesOnSpan(scope) {
  return { scope: scope[_sentryScope], isolationScope: scope[_sentryIsolationScope] };
};
export const setCapturedScopesOnSpan = function setCapturedScopesOnSpan(arg0, arg1, arg2) {
  if (arg0) {
    const result = _mod12946.addNonEnumerableProperty(arg0, _sentryIsolationScope, arg2);
    const result1 = _mod12946.addNonEnumerableProperty(arg0, _sentryScope, arg1);
  }
};
