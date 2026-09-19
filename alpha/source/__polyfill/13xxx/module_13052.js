// Module ID: 13052
// Function ID: 13053
// Dependencies: [13046, 13049]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 13052
import _mod13046 from "module_13046" /* 13046 */;
import _mod13049 from "module_13049" /* 13049 */;

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod13049.GLOBAL_OBJ.onunhandledrejection;
  _mod13049.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    _mod13046.triggerHandlers("unhandledrejection", arg0);
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
  _mod13049.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  _mod13046.addHandler("unhandledrejection", arg0);
  _mod13046.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};
