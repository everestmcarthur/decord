// Module ID: 12944
// Function ID: 12945
// Name: errorCallback
// Dependencies: [12945, 12952, 12953, 12976, 12948, 12965]
// Exports: registerSpanErrorInstrumentation

// Module 12944 (errorCallback)
import _mod12945 from "module_12945" /* 12945 */;
import _mod12952 from "module_12952" /* 12952 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12953 */;

require = arg1;
const dependencyMap = arg6;
function errorCallback() {
  const activeSpan = spanTimeInputToSeconds.getActiveSpan();
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = tmp(12953).getRootSpan(activeSpan);
    const tmpResult = tmp(12953);
  }
  if (rootSpan) {
    if (tmp(12976).DEBUG_BUILD) {
      const logger = tmp(12948).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: tmp(12965).SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12945.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12952.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
