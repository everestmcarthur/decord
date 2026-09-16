// Module ID: 12970
// Function ID: 12971
// Dependencies: [12936]
// Exports: addTracingExtensions

// Module 12970
import errorCallback from "errorCallback" /* 12936 */;

require = arg1;
const dependencyMap = arg6;

export const addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};
