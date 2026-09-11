// Module ID: 12918
// Function ID: 12919
// Dependencies: [12893, 12913]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 12918
import _mod12893 from "module_12893" /* 12893 */;
import ScopeClass from "ScopeClass" /* 12913 */;

require = arg1;
const dependencyMap = arg6;

export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  return _mod12893.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  return _mod12893.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
};
