// Module ID: 13045
// Function ID: 13046
// Dependencies: [13046, 13049]
// Exports: addGlobalErrorInstrumentationHandler

// Module 13045
import _mod13046 from "module_13046" /* 13046 */;
import _mod13049 from "module_13049" /* 13049 */;

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod13049.GLOBAL_OBJ.onerror;
  _mod13049.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    _mod13046.triggerHandlers("error", { column, error, line, msg, url });
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
  _mod13049.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  _mod13046.addHandler("error", arg0);
  _mod13046.maybeInstrument("error", instrumentError);
};
