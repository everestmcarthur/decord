// Module ID: 12888
// Function ID: 12889
// Name: errorCallback
// Dependencies: [12889, 12896, 12897, 12920, 12892, 12909]
// Exports: registerSpanErrorInstrumentation

// Module 12888 (errorCallback)
import _mod12889 from "module_12889" /* 12889 */;
import _mod12896 from "module_12896" /* 12896 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12897 */;

require = arg1;
const dependencyMap = arg6;
function errorCallback() {
  const activeSpan = spanTimeInputToSeconds.getActiveSpan();
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = tmp(12897).getRootSpan(activeSpan);
    const tmpResult = tmp(12897);
  }
  if (rootSpan) {
    if (tmp(12920).DEBUG_BUILD) {
      const logger = tmp(12892).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: tmp(12909).SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12889.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12896.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
