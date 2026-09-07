// Module ID: 12827
// Function ID: 12828
// Name: getDefaultCurrentScope
// Dependencies: [12802, 12822]

// Module 12827 (getDefaultCurrentScope)
import getGlobalSingleton from "getGlobalSingleton" /* 12802 */;

require = arg1;
const dependencyMap = arg6;
arg5.getDefaultCurrentScope = function getDefaultCurrentScope() {
  return getGlobalSingleton.getGlobalSingleton("defaultCurrentScope", () => {
    const scope = new callback(table[1]).Scope();
    return scope;
  });
};
arg5.getDefaultIsolationScope = function getDefaultIsolationScope() {
  return getGlobalSingleton.getGlobalSingleton("defaultIsolationScope", () => {
    const scope = new callback(table[1]).Scope();
    return scope;
  });
};
