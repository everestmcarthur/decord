// Module ID: 12897
// Function ID: 12898
// Dependencies: [12863]
// Exports: addTracingExtensions

// Module 12897
import errorCallback from "errorCallback" /* 12863 */;

require = arg1;
const dependencyMap = arg6;

export const addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};
