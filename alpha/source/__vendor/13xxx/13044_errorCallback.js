// Module ID: 13044
// Function ID: 13045
// Name: errorCallback
// Dependencies: [13045, 13052, 13053, 13076, 13048, 13065]
// Exports: registerSpanErrorInstrumentation

// Module 13044 (errorCallback)
import _mod13045 from "module_13045" /* 13045 */;
import _mod13052 from "module_13052" /* 13052 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 13053 */;

require = arg1;
const dependencyMap = arg6;
function errorCallback() {
  const activeSpan = spanTimeInputToSeconds.getActiveSpan();
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = tmp(13053).getRootSpan(activeSpan);
    const tmpResult = tmp(13053);
  }
  if (rootSpan) {
    if (tmp(13076).DEBUG_BUILD) {
      const logger = tmp(13048).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: tmp(13065).SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod13045.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod13052.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
