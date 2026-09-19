// Module ID: 13078
// Function ID: 13079
// Dependencies: [13044]
// Exports: addTracingExtensions

// Module 13078
import errorCallback from "errorCallback" /* 13044 */;

require = arg1;
const dependencyMap = arg6;

export const addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};
