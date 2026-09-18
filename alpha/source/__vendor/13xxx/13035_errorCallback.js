// Module ID: 13035
// Function ID: 13036
// Name: errorCallback
// Dependencies: [13036, 13043, 13044, 13067, 13039, 13056]
// Exports: registerSpanErrorInstrumentation

// Module 13035 (errorCallback)
import _mod13036 from "module_13036" /* 13036 */;
import _mod13043 from "module_13043" /* 13043 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 13044 */;

require = arg1;
const dependencyMap = arg6;
function errorCallback() {
  const activeSpan = spanTimeInputToSeconds.getActiveSpan();
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = tmp(13044).getRootSpan(activeSpan);
    const tmpResult = tmp(13044);
  }
  if (rootSpan) {
    if (tmp(13067).DEBUG_BUILD) {
      const logger = tmp(13039).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: tmp(13056).SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod13036.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod13043.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
