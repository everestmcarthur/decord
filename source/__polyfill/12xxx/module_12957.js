// Module ID: 12957
// Function ID: 12958
// Dependencies: [12923]
// Exports: addTracingExtensions

// Module 12957
import errorCallback from "errorCallback" /* 12923 */;

require = arg1;
const dependencyMap = arg6;

export const addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};
