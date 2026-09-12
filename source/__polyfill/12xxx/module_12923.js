// Module ID: 12923
// Function ID: 12924
// Dependencies: [12924, 12927]
// Exports: addGlobalErrorInstrumentationHandler

// Module 12923
import _mod12924 from "module_12924" /* 12924 */;
import _mod12927 from "module_12927" /* 12927 */;

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod12927.GLOBAL_OBJ.onerror;
  _mod12927.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    _mod12924.triggerHandlers("error", { column, error, line, msg, url });
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
  _mod12927.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  _mod12924.addHandler("error", arg0);
  _mod12924.maybeInstrument("error", instrumentError);
};
