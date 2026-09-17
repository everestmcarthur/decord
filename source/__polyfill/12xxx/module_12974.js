// Module ID: 12974
// Function ID: 12975
// Dependencies: [12949, 12969]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 12974
import _mod12949 from "module_12949" /* 12949 */;
import ScopeClass from "ScopeClass" /* 12969 */;

require = arg1;
const dependencyMap = arg6;

export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  return _mod12949.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  return _mod12949.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
};
