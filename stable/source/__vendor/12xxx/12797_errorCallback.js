// Module ID: 12797
// Function ID: 12798
// Name: errorCallback
// Dependencies: [12798, 12805, 12806, 12829, 12801, 12818]
// Exports: registerSpanErrorInstrumentation

// Module 12797 (errorCallback)
import _mod12798 from "module_12798" /* 12798 */;
import _mod12805 from "module_12805" /* 12805 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12806 */;

require = arg1;
const dependencyMap = arg6;
function errorCallback() {
  const activeSpan = spanTimeInputToSeconds.getActiveSpan();
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = tmp(12806).getRootSpan(activeSpan);
    const tmpResult = tmp(12806);
  }
  if (rootSpan) {
    if (tmp(12829).DEBUG_BUILD) {
      const logger = tmp(12801).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: tmp(12818).SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12798.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12805.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
