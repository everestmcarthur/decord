// Module ID: 12920
// Function ID: 12921
// Dependencies: [12886]
// Exports: addTracingExtensions

// Module 12920
import errorCallback from "errorCallback" /* 12886 */;

require = arg1;
const dependencyMap = arg6;

export const addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};
