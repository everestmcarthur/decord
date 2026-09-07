// Module ID: 12805
// Function ID: 12806
// Name: instrumentUnhandledRejection
// Dependencies: [12799, 12802]

// Module 12805 (instrumentUnhandledRejection)
import addHandler from "addHandler" /* 12799 */;
import getGlobalSingleton from "getGlobalSingleton" /* 12802 */;

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  const onunhandledrejection = getGlobalSingleton.GLOBAL_OBJ.onunhandledrejection;
  getGlobalSingleton.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    callback(table[0]).triggerHandlers("unhandledrejection", arg0);
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
      const tmp2 = onunhandledrejection;
    }
  };
  getGlobalSingleton.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let c2 = null;
arg5.addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  addHandler.addHandler("unhandledrejection", arg0);
  const obj = addHandler;
  addHandler.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};
