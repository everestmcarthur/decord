// Module ID: 12936
// Function ID: 12937
// Name: errorCallback
// Dependencies: [12937, 12944, 12945, 12968, 12940, 12957]
// Exports: registerSpanErrorInstrumentation

// Module 12936 (errorCallback)
import _mod12937 from "module_12937" /* 12937 */;
import _mod12944 from "module_12944" /* 12944 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12945 */;

require = arg1;
const dependencyMap = arg6;
function errorCallback() {
  const activeSpan = spanTimeInputToSeconds.getActiveSpan();
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = tmp(12945).getRootSpan(activeSpan);
    const tmpResult = tmp(12945);
  }
  if (rootSpan) {
    if (tmp(12968).DEBUG_BUILD) {
      const logger = tmp(12940).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: tmp(12957).SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12937.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12944.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
