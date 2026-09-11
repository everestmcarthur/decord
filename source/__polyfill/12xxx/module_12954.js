// Module ID: 12954
// Function ID: 12955
// Dependencies: [12920, 12892, 12919]
// Exports: initAndBind, setCurrentClient

// Module 12954
import _mod12892 from "module_12892" /* 12892 */;
import _mod12919 from "module_12919" /* 12919 */;
import _mod12920 from "module_12920" /* 12920 */;

require = arg1;
const dependencyMap = arg6;

export const initAndBind = function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const obj = _mod12892;
    if (_mod12920.DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const currentScope = _mod12919.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const currentScope1 = _mod12919.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
};
export const setCurrentClient = function setCurrentClient(arg0) {
  const currentScope = _mod12919.getCurrentScope();
  currentScope.setClient(arg0);
};
