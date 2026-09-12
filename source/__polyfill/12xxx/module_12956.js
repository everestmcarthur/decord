// Module ID: 12956
// Function ID: 12957
// Dependencies: [12922]
// Exports: addTracingExtensions

// Module 12956
import errorCallback from "errorCallback" /* 12922 */;

require = arg1;
const dependencyMap = arg6;

export const addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};
