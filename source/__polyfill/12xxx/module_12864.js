// Module ID: 12864
// Function ID: 12865
// Dependencies: [12865, 12868]
// Exports: addGlobalErrorInstrumentationHandler

// Module 12864
import _mod12865 from "module_12865" /* 12865 */;
import _mod12868 from "module_12868" /* 12868 */;

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod12868.GLOBAL_OBJ.onerror;
  _mod12868.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    _mod12865.triggerHandlers("error", { column, error, line, msg, url });
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
  _mod12868.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  _mod12865.addHandler("error", arg0);
  _mod12865.maybeInstrument("error", instrumentError);
};
