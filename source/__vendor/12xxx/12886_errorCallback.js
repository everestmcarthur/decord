// Module ID: 12886
// Function ID: 12887
// Name: errorCallback
// Dependencies: [12887, 12894, 12895, 12918, 12890, 12907]
// Exports: registerSpanErrorInstrumentation

// Module 12886 (errorCallback)
import _mod12887 from "module_12887" /* 12887 */;
import _mod12894 from "module_12894" /* 12894 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12895 */;

require = arg1;
const dependencyMap = arg6;
function errorCallback() {
  const activeSpan = spanTimeInputToSeconds.getActiveSpan();
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = tmp(12895).getRootSpan(activeSpan);
    const tmpResult = tmp(12895);
  }
  if (rootSpan) {
    if (tmp(12918).DEBUG_BUILD) {
      const logger = tmp(12890).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: tmp(12907).SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12887.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12894.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
