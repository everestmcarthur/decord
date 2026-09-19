// Module ID: 13067
// Function ID: 13068
// Dependencies: [13066, 13068]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 13067
import _mod13066 from "module_13066" /* 13066 */;
import _mod13068 from "module_13068" /* 13068 */;

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  const sentryCarrier = _mod13066.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod13068.getStackAsyncContextStrategy();
    const tmpResult = _mod13068;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod13066.getMainCarrier();
  _mod13066.getSentryCarrier(mainCarrier).acs = acs;
};
