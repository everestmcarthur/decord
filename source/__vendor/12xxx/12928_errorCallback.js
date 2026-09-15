// Module ID: 12928
// Function ID: 12929
// Name: errorCallback
// Dependencies: [12929, 12936, 12937, 12960, 12932, 12949]
// Exports: registerSpanErrorInstrumentation

// Module 12928 (errorCallback)
import _mod12929 from "module_12929" /* 12929 */;
import _mod12936 from "module_12936" /* 12936 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12937 */;

require = arg1;
const dependencyMap = arg6;
function errorCallback() {
  const activeSpan = spanTimeInputToSeconds.getActiveSpan();
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = tmp(12937).getRootSpan(activeSpan);
    const tmpResult = tmp(12937);
  }
  if (rootSpan) {
    if (tmp(12960).DEBUG_BUILD) {
      const logger = tmp(12932).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: tmp(12949).SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12929.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12936.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
