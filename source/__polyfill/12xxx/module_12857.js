// Module ID: 12857
// Function ID: 12858
// Dependencies: [12823]
// Exports: addTracingExtensions

// Module 12857
import errorCallback from "errorCallback" /* 12823 */;

require = arg1;
const dependencyMap = arg6;

export const addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};
