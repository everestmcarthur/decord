// Module ID: 12978
// Function ID: 12979
// Dependencies: [12944]
// Exports: addTracingExtensions

// Module 12978
import errorCallback from "errorCallback" /* 12944 */;

require = arg1;
const dependencyMap = arg6;

export const addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};
