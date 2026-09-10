// Module ID: 12896
// Function ID: 12897
// Dependencies: [12873]
// Exports: getCapturedScopesOnSpan, setCapturedScopesOnSpan

// Module 12896
import _mod12873 from "module_12873" /* 12873 */;

require = arg1;
const dependencyMap = arg6;
const _sentryScope = "_sentryScope";
const _sentryIsolationScope = "_sentryIsolationScope";

export const getCapturedScopesOnSpan = function getCapturedScopesOnSpan(scope) {
  return { scope: scope[_sentryScope], isolationScope: scope[_sentryIsolationScope] };
};
export const setCapturedScopesOnSpan = function setCapturedScopesOnSpan(arg0, arg1, arg2) {
  if (arg0) {
    const result = _mod12873.addNonEnumerableProperty(arg0, _sentryIsolationScope, arg2);
    const result1 = _mod12873.addNonEnumerableProperty(arg0, _sentryScope, arg1);
  }
};
