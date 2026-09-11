// Module ID: 12916
// Function ID: 12917
// Dependencies: [12891, 12911]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 12916
import _mod12891 from "module_12891" /* 12891 */;
import ScopeClass from "ScopeClass" /* 12911 */;

require = arg1;
const dependencyMap = arg6;

export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  return _mod12891.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  return _mod12891.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
};
