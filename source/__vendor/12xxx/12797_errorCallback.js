// Module ID: 12797
// Function ID: 12798
// Name: errorCallback
// Dependencies: [12798, 12805, 12806, 12829, 12801, 12818]

// Module 12797 (errorCallback)
import instrumentError from "instrumentError" /* 12798 */;
import instrumentUnhandledRejection from "instrumentUnhandledRejection" /* 12805 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12806 */;

require = arg1;
const dependencyMap = arg6;
function errorCallback() {
  let obj = spanTimeInputToSeconds;
  const activeSpan = obj.getActiveSpan();
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
    obj = { code: null, message: "internal_error" };
    obj[0] = tmp(12818).SPAN_STATUS_ERROR;
    rootSpan.setStatus(obj);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";
arg5.registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = instrumentError.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj = instrumentError;
    const result1 = instrumentUnhandledRejection.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
    const obj2 = instrumentUnhandledRejection;
  }
};
