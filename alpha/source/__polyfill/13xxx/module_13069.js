// Module ID: 13069
// Function ID: 13070
// Dependencies: [13035]
// Exports: addTracingExtensions

// Module 13069
import errorCallback from "errorCallback" /* 13035 */;

require = arg1;
const dependencyMap = arg6;

export const addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};
