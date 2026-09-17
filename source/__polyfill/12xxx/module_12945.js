// Module ID: 12945
// Function ID: 12946
// Dependencies: [12946, 12949]
// Exports: addGlobalErrorInstrumentationHandler

// Module 12945
import _mod12946 from "module_12946" /* 12946 */;
import _mod12949 from "module_12949" /* 12949 */;

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod12949.GLOBAL_OBJ.onerror;
  _mod12949.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    _mod12946.triggerHandlers("error", { column, error, line, msg, url });
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
  _mod12949.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  _mod12946.addHandler("error", arg0);
  _mod12946.maybeInstrument("error", instrumentError);
};
