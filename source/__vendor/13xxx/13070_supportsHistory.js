// Module ID: 13070
// Function ID: 13071
// Name: supportsHistory
// Dependencies: [12949]
// Exports: supportsHistory

// Module 13070 (supportsHistory)
import _mod12949 from "module_12949" /* 12949 */;

require = arg1;
const dependencyMap = arg6;

export const supportsHistory = function supportsHistory() {
  const chrome = _mod12949.GLOBAL_OBJ.chrome;
  let runtime = chrome;
  if (chrome) {
    runtime = chrome.app;
  }
  if (runtime) {
    runtime = chrome.app.runtime;
  }
  let tmp4 = !runtime;
  if (!runtime) {
    tmp4 = tmp3;
  }
  return tmp4;
};
