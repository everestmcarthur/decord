// Module ID: 12863
// Function ID: 12864
// Name: errorCallback
// Dependencies: [12864, 12871, 12872, 12895, 12867, 12884]
// Exports: registerSpanErrorInstrumentation

// Module 12863 (errorCallback)
import _mod12864 from "module_12864" /* 12864 */;
import _mod12871 from "module_12871" /* 12871 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12872 */;

require = arg1;
const dependencyMap = arg6;
function errorCallback() {
  const activeSpan = spanTimeInputToSeconds.getActiveSpan();
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = tmp(12872).getRootSpan(activeSpan);
    const tmpResult = tmp(12872);
  }
  if (rootSpan) {
    if (tmp(12895).DEBUG_BUILD) {
      const logger = tmp(12867).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: tmp(12884).SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12864.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12871.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
