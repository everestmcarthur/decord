// Module ID: 12886
// Function ID: 12887
// Dependencies: [12885, 12887]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 12886
import _mod12885 from "module_12885" /* 12885 */;
import _mod12887 from "module_12887" /* 12887 */;

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  const sentryCarrier = _mod12885.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12887.getStackAsyncContextStrategy();
    const tmpResult = _mod12887;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12885.getMainCarrier();
  _mod12885.getSentryCarrier(mainCarrier).acs = acs;
};
