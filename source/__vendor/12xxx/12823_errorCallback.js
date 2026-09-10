// Module ID: 12823
// Function ID: 12824
// Name: errorCallback
// Dependencies: [12824, 12831, 12832, 12855, 12827, 12844]
// Exports: registerSpanErrorInstrumentation

// Module 12823 (errorCallback)
import _mod12824 from "module_12824" /* 12824 */;
import _mod12831 from "module_12831" /* 12831 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12832 */;

require = arg1;
const dependencyMap = arg6;
function errorCallback() {
  const activeSpan = spanTimeInputToSeconds.getActiveSpan();
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = tmp(12832).getRootSpan(activeSpan);
    const tmpResult = tmp(12832);
  }
  if (rootSpan) {
    if (tmp(12855).DEBUG_BUILD) {
      const logger = tmp(12827).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: tmp(12844).SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12824.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12831.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
