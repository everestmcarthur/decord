// Module ID: 12798
// Function ID: 12799
// Dependencies: [12799, 12802]
// Exports: addGlobalErrorInstrumentationHandler

// Module 12798
import _mod12799 from "module_12799" /* 12799 */;
import _mod12802 from "module_12802" /* 12802 */;

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod12802.GLOBAL_OBJ.onerror;
  _mod12802.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    _mod12799.triggerHandlers("error", { column, error, line, msg, url });
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
  _mod12802.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  _mod12799.addHandler("error", arg0);
  _mod12799.maybeInstrument("error", instrumentError);
};
