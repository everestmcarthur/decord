// Module ID: 12922
// Function ID: 12923
// Dependencies: [12888]
// Exports: addTracingExtensions

// Module 12922
import errorCallback from "errorCallback" /* 12888 */;

require = arg1;
const dependencyMap = arg6;

export const addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};
