// Module ID: 12820
// Function ID: 12821
// Name: getAsyncContextStrategy
// Dependencies: [12819, 12821]

// Module 12820 (getAsyncContextStrategy)
import getMainCarrier from "getMainCarrier" /* 12819 */;
import withScope from "withScope" /* 12821 */;

require = arg1;
const dependencyMap = arg6;
arg5.getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  const sentryCarrier = getMainCarrier.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = withScope.getStackAsyncContextStrategy();
    const tmpResult = withScope;
  }
  return acs;
};
arg5.setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = getMainCarrier.getMainCarrier();
  const obj = getMainCarrier;
  getMainCarrier.getSentryCarrier(mainCarrier).acs = acs;
};
