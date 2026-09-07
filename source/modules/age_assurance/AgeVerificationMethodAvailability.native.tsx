// Module ID: 8438
// Function ID: 8439
// Name: filterByAvailability
// Dependencies: [5, 32, 19, 1379, 1115, 8439, 8440, 2]
// Exports: getAvailableMethodsV2, useAvailableMethodsV2

// Module 8438 (filterByAvailability)
import set from "set" /* 1115 */;
import MIN_AGE_GATE from "MIN_AGE_GATE" /* 8439 */;
import closure_2 from "asyncGeneratorStep" /* 5 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;

require = arg1;
function filterByAvailability(arr) {
  ({ googleWallet: require, appStoreSignal: dependencyMap } = arg1);
  return arr.filter((method) => {
    method = method.method;
    if (callback(table[3]).AgeAssuranceMethod.GOOGLE_WALLET === method) {
      return callback;
    } else if (tmp(tmp2[3]).AgeAssuranceMethod.OS_SIGNAL === method) {
      return table;
    } else {
      return true;
    }
    tmp = callback;
    tmp2 = table;
  });
}
function isAppStoreSignalAvailable() {
  let isIOSResult = set.isIOS();
  if (isIOSResult) {
    isIOSResult = MIN_AGE_GATE.isAppStoreAgeSignalSupported();
    const tmpResult = MIN_AGE_GATE;
  }
  return isIOSResult;
}
function _getAvailableMethodsV() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    return (function*(arg0, googleWallet) {
      closure_3 = tmp2;
      closure_2 = callback;
      closure_1 = {};
      const obj2 = callback(closure_1_1[6]);
      closure_1.googleWallet = yield obj2.checkGoogleWalletAvailable();
      closure_1.appStoreSignal = v0();
      return callback2(closure_2, closure_1);
    })();
  });
  closure_7 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let result = require("set").fileFinishedImporting("modules/age_assurance/AgeVerificationMethodAvailability.native.tsx");

export const useAvailableMethodsV2 = function useAvailableMethodsV2(methods) {
  closure_0 = methods;
  let tmp = memo(React.useState(false), 2);
  const first = tmp[0];
  closure_2 = tmp[1];
  const effect = React.useEffect(() => {
    c0 = false;
    const result = methods(first[6]).checkGoogleWalletAvailable();
    result.then((arg0) => {
      if (!c0) {
        closure_1_2(arg0);
      }
    });
    return () => {
      c0 = true;
    };
  }, []);
  memo = React.useMemo(() => {
    let isIOSResult = methods(first[4]).isIOS();
    if (isIOSResult) {
      isIOSResult = methods(first[5]).isAppStoreAgeSignalSupported();
      const tmpResult = methods(first[5]);
    }
    return isIOSResult;
  }, []);
  const items = [methods, first, memo];
  return React.useMemo(() => {
    methods = closure_1;
    closure_1 = memo;
    return methods.filter((method) => {
      method = method.method;
      if (callback(table[3]).AgeAssuranceMethod.GOOGLE_WALLET === method) {
        return callback;
      } else if (tmp(tmp2[3]).AgeAssuranceMethod.OS_SIGNAL === method) {
        return table;
      } else {
        return true;
      }
      tmp = callback;
      tmp2 = table;
    });
  }, items);
};
export const getAvailableMethodsV2 = function getAvailableMethodsV2(methods) {
  const self = this;
  const apply = _getAvailableMethodsV.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
