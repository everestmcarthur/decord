// Module ID: 12889
// Function ID: 12890
// Dependencies: [12890, 12893]
// Exports: addGlobalErrorInstrumentationHandler

// Module 12889
import _mod12890 from "module_12890" /* 12890 */;
import _mod12893 from "module_12893" /* 12893 */;

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod12893.GLOBAL_OBJ.onerror;
  _mod12893.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    _mod12890.triggerHandlers("error", { column, error, line, msg, url });
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
  _mod12893.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  _mod12890.addHandler("error", arg0);
  _mod12890.maybeInstrument("error", instrumentError);
};
