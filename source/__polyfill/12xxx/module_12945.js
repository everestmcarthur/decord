// Module ID: 12945
// Function ID: 12946
// Dependencies: [12944, 12946]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 12945
import _mod12944 from "module_12944" /* 12944 */;
import _mod12946 from "module_12946" /* 12946 */;

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  const sentryCarrier = _mod12944.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12946.getStackAsyncContextStrategy();
    const tmpResult = _mod12946;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12944.getMainCarrier();
  _mod12944.getSentryCarrier(mainCarrier).acs = acs;
};
