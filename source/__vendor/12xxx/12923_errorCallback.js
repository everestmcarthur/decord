// Module ID: 12923
// Function ID: 12924
// Name: errorCallback
// Dependencies: [12924, 12931, 12932, 12955, 12927, 12944]
// Exports: registerSpanErrorInstrumentation

// Module 12923 (errorCallback)
import _mod12924 from "module_12924" /* 12924 */;
import _mod12931 from "module_12931" /* 12931 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12932 */;

require = arg1;
const dependencyMap = arg6;
function errorCallback() {
  const activeSpan = spanTimeInputToSeconds.getActiveSpan();
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = tmp(12932).getRootSpan(activeSpan);
    const tmpResult = tmp(12932);
  }
  if (rootSpan) {
    if (tmp(12955).DEBUG_BUILD) {
      const logger = tmp(12927).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: tmp(12944).SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12924.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12931.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
