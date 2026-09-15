// Module ID: 12961
// Function ID: 12962
// Dependencies: [12938]
// Exports: getCapturedScopesOnSpan, setCapturedScopesOnSpan

// Module 12961
import _mod12938 from "module_12938" /* 12938 */;

require = arg1;
const dependencyMap = arg6;
const _sentryScope = "_sentryScope";
const _sentryIsolationScope = "_sentryIsolationScope";

export const getCapturedScopesOnSpan = function getCapturedScopesOnSpan(scope) {
  return { scope: scope[_sentryScope], isolationScope: scope[_sentryIsolationScope] };
};
export const setCapturedScopesOnSpan = function setCapturedScopesOnSpan(arg0, arg1, arg2) {
  if (arg0) {
    const result = _mod12938.addNonEnumerableProperty(arg0, _sentryIsolationScope, arg2);
    const result1 = _mod12938.addNonEnumerableProperty(arg0, _sentryScope, arg1);
  }
};
