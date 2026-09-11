// Module ID: 12896
// Function ID: 12897
// Dependencies: [12890, 12893]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 12896
import _mod12890 from "module_12890" /* 12890 */;
import _mod12893 from "module_12893" /* 12893 */;

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12893.GLOBAL_OBJ.onunhandledrejection;
  _mod12893.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    _mod12890.triggerHandlers("unhandledrejection", arg0);
    if (!onunhandledrejection) {
      return !onunhandledrejection;
    } else {
      const self = this;
      const apply = onunhandledrejection.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
    }
  };
  _mod12893.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  _mod12890.addHandler("unhandledrejection", arg0);
  _mod12890.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};
