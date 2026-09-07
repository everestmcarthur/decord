// Module ID: 12831
// Function ID: 12832
// Name: addTracingExtensions
// Dependencies: [12797]

// Module 12831 (addTracingExtensions)
import errorCallback from "errorCallback" /* 12797 */;

require = arg1;
const dependencyMap = arg6;
arg5.addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};
