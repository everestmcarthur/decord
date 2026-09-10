// Module ID: 12824
// Function ID: 12825
// Dependencies: [12825, 12828]
// Exports: addGlobalErrorInstrumentationHandler

// Module 12824
import _mod12825 from "module_12825" /* 12825 */;
import _mod12828 from "module_12828" /* 12828 */;

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod12828.GLOBAL_OBJ.onerror;
  _mod12828.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    _mod12825.triggerHandlers("error", { column, error, line, msg, url });
    if (!onerror) {
      return tmp2;
    } else {
      const self = this;
      const apply = onerror.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
    }
  };
  _mod12828.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  _mod12825.addHandler("error", arg0);
  _mod12825.maybeInstrument("error", instrumentError);
};
