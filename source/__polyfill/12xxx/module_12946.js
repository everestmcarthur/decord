// Module ID: 12946
// Function ID: 12947
// Dependencies: [12945, 12947]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 12946
import _mod12945 from "module_12945" /* 12945 */;
import _mod12947 from "module_12947" /* 12947 */;

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  const sentryCarrier = _mod12945.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12947.getStackAsyncContextStrategy();
    const tmpResult = _mod12947;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12945.getMainCarrier();
  _mod12945.getSentryCarrier(mainCarrier).acs = acs;
};
