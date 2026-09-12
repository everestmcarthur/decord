// Module ID: 12922
// Function ID: 12923
// Name: errorCallback
// Dependencies: [12923, 12930, 12931, 12954, 12926, 12943]
// Exports: registerSpanErrorInstrumentation

// Module 12922 (errorCallback)
import _mod12923 from "module_12923" /* 12923 */;
import _mod12930 from "module_12930" /* 12930 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12931 */;

require = arg1;
const dependencyMap = arg6;
function errorCallback() {
  const activeSpan = spanTimeInputToSeconds.getActiveSpan();
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = tmp(12931).getRootSpan(activeSpan);
    const tmpResult = tmp(12931);
  }
  if (rootSpan) {
    if (tmp(12954).DEBUG_BUILD) {
      const logger = tmp(12926).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: tmp(12943).SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12923.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12930.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
