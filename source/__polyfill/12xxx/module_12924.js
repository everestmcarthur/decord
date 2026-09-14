// Module ID: 12924
// Function ID: 12925
// Dependencies: [12925, 12928]
// Exports: addGlobalErrorInstrumentationHandler

// Module 12924
import _mod12925 from "module_12925" /* 12925 */;
import _mod12928 from "module_12928" /* 12928 */;

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod12928.GLOBAL_OBJ.onerror;
  _mod12928.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    _mod12925.triggerHandlers("error", { column, error, line, msg, url });
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
  _mod12928.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  _mod12925.addHandler("error", arg0);
  _mod12925.maybeInstrument("error", instrumentError);
};
