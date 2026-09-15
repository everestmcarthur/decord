// Module ID: 12962
// Function ID: 12963
// Dependencies: [12928]
// Exports: addTracingExtensions

// Module 12962
import errorCallback from "errorCallback" /* 12928 */;

require = arg1;
const dependencyMap = arg6;

export const addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};
