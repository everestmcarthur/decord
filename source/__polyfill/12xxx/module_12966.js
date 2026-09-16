// Module ID: 12966
// Function ID: 12967
// Dependencies: [12941, 12961]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 12966
import _mod12941 from "module_12941" /* 12941 */;
import ScopeClass from "ScopeClass" /* 12961 */;

require = arg1;
const dependencyMap = arg6;

export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  return _mod12941.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  return _mod12941.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
};
