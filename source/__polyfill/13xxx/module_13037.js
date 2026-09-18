// Module ID: 13037
// Function ID: 13038
// Dependencies: [13038, 13039, 13042]
// Exports: addHandler, maybeInstrument, resetInstrumentationHandlers, triggerHandlers

// Module 13037
import _mod13038 from "module_13038" /* 13038 */;

require = arg1;
const dependencyMap = {};
let closure_3 = {};

export const addHandler = function addHandler(arg0, arg1) {
  dependencyMap[arg0] = dependencyMap[arg0] || [];
  dependencyMap[arg0].push(arg1);
};
export const maybeInstrument = function maybeInstrument(arg0, fn) {
  if (!closure_3[arg0]) {
    tmp2[arg0] = true;
    try {
      fn();
    } catch (tmp5) {
      if (_mod13038.DEBUG_BUILD) {
        const logger = tmp6(13039).logger;
        const _HermesInternal = HermesInternal;
        logger.error("Error while instrumenting " + tmp, tmp5);
      }
      tmp6 = require;
    }
  }
};
export const resetInstrumentationHandlers = function resetInstrumentationHandlers() {
  const keys = Object.keys(closure_2);
  const item = keys.forEach((item) => {
    dependencyMap[item] = undefined;
  });
};
export const triggerHandlers = function triggerHandlers(arg0, arg1) {
  let tmp8 = arg0;
  if (arg0) {
    tmp8 = dependencyMap[arg0];
  }
  if (tmp8) {
    const iter = tmp8[Symbol.iterator]();
    if (iter !== undefined) {
      try {
        tmp15(arg1);
      } catch (tmp18) {
        if (_mod13038.DEBUG_BUILD) {
          const logger = tmp19(13039).logger;
          logger.error(tmp2 + tmp6 + tmp3 + tmp19(13042).getFunctionName(tmp7) + tmp4, tmp18);
          const tmp19Result = tmp19(13042);
        }
      }
    }
    const nextResult = iter.next();
  }
};
