// Module ID: 12977
// Function ID: 12978
// Dependencies: [12954]
// Exports: getCapturedScopesOnSpan, setCapturedScopesOnSpan

// Module 12977
import _mod12954 from "module_12954" /* 12954 */;

require = arg1;
const dependencyMap = arg6;
const _sentryScope = "_sentryScope";
const _sentryIsolationScope = "_sentryIsolationScope";

export const getCapturedScopesOnSpan = function getCapturedScopesOnSpan(scope) {
  return { scope: scope[_sentryScope], isolationScope: scope[_sentryIsolationScope] };
};
export const setCapturedScopesOnSpan = function setCapturedScopesOnSpan(arg0, arg1, arg2) {
  if (arg0) {
    const result = _mod12954.addNonEnumerableProperty(arg0, _sentryIsolationScope, arg2);
    const result1 = _mod12954.addNonEnumerableProperty(arg0, _sentryScope, arg1);
  }
};
