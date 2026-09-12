// Module ID: 12952
// Function ID: 12953
// Dependencies: [12927, 12947]
// Exports: getDefaultCurrentScope, getDefaultIsolationScope

// Module 12952
import _mod12927 from "module_12927" /* 12927 */;
import ScopeClass from "ScopeClass" /* 12947 */;

require = arg1;
const dependencyMap = arg6;

export const getDefaultCurrentScope = function getDefaultCurrentScope() {
  return _mod12927.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
};
export const getDefaultIsolationScope = function getDefaultIsolationScope() {
  return _mod12927.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new ScopeClass.Scope();
    return scope;
  });
};
