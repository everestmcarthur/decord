// Module ID: 12911
// Function ID: 12912
// Dependencies: [12910, 12912]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 12911
import _mod12910 from "module_12910" /* 12910 */;
import _mod12912 from "module_12912" /* 12912 */;

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  const sentryCarrier = _mod12910.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12912.getStackAsyncContextStrategy();
    const tmpResult = _mod12912;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12910.getMainCarrier();
  _mod12910.getSentryCarrier(mainCarrier).acs = acs;
};
