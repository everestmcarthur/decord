// Module ID: 8592
// Function ID: 8593
// Name: _requestManualReview
// Dependencies: [5, 502, 1074, 8399, 1090, 1272, 8418, 8411, 8404, 2]
// Exports: handleManualReviewCta, invalidateManualReviewCache

// Module 8592 (_requestManualReview)
import setDefault from "set" /* 1090 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "fetchFingerprint" /* 502 */;
import { Endpoints } from "ME" /* 1074 */;
import { SafetyToastType } from "SafetyToastType" /* 8399 */;

const require = arg1;
function _requestManualReview() {
  const self = this;
  const tmp = callback(function*() {
    const HTTP = v0(closure_1_2[5]).HTTP;
    obj1 = { url: null, rejectWithError: true };
    obj1[0] = closure_1_5.AGE_VERIFICATION_MANUAL_REVIEW;
    yield HTTP.post(obj1);
    return arg1.body;
  });
  closure_9 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _requestManualReviewSuspendedUser() {
  const self = this;
  const tmp = callback(function*() {
    const suspendedUserToken = closure_1_4.getSuspendedUserToken();
    const HTTP = v0(closure_1_2[5]).HTTP;
    obj1 = { url: null, body: null, rejectWithError: true };
    obj1[0] = closure_1_5.AGE_VERIFICATION_SUSPENDED_MANUAL_REVIEW;
    const obj2 = { token: null };
    obj2[0] = suspendedUserToken;
    obj1[1] = obj2;
    yield HTTP.post(obj1);
    return arg1.body;
  });
  closure_10 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _handleManualReviewCta() {
  let self = this;
  const tmp = callback(function*() {
    if (c5 === 2) {
      c5 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const callback = tmp4;
            closure_0 = tmp8;
            closure_0 = undefined;
            if (c11) {
              c5 = 3;
            } else {
              c11 = true;
              c3 = 2;
              closure_0 = closure_1_12;
              let tmp23 = null == closure_0;
              if (!tmp23) {
                const _Date2 = Date;
                tmp23 = Date.now() - closure_1_13 >= closure_1_8;
              }
              if (tmp23) {
                if (obj6.isCurrentUserSuspended()) {
                  (function requestManualReviewSuspendedUser() {
                    const self = this;
                    const apply = closure_10.apply;
                    if (typeof apply === "unknown") {
                      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                    } else {
                      applyArgumentsResult = apply(self, arguments);
                    }
                    return applyArgumentsResult;
                  })();
                } else {
                  (function requestManualReview() {
                    const self = this;
                    const apply = closure_9.apply;
                    if (typeof apply === "unknown") {
                      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                    } else {
                      applyArgumentsResult = apply(self, arguments);
                    }
                    return applyArgumentsResult;
                  })();
                }
                c4 = 3;
                c5 = 1;
                obj6 = closure_1_0(closure_1_2[6]);
              } else if (closure_0.status !== constants2.DECIDED_TEEN) {
                const result = callback(8411).showManualReviewWebview(closure_0.verification_webview_url);
                c3 = 1;
                const obj3 = callback(8411);
              }
            }
            const result1 = callback(8411).showManualReviewDecidedTeenModal();
            c3 = 0;
            c11 = false;
            c5 = 3;
            obj1 = { value: null, done: true };
            obj1[0] = undefined;
            return obj1;
          }
        } else if (1 === tmp8) {
          c3 = 0;
          c11 = false;
          throw dependencyMap;
        } else if (2 === tmp8) {
          c3 = 1;
          obj1 = callback(8404);
          obj1.showFailedToast(constants.TIGGER_PAWTECT_ERROR);
        } else if (arg0 === 1) {
          c5 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 0;
          c11 = false;
          c5 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          closure_0 = arg1;
          closure_12 = closure_0;
          const _Date = Date;
          closure_13 = Date.now();
        }
        c3 = 0;
        c11 = false;
      } catch (tmp46) {
        dependencyMap = tmp46;
        if (tmp5 === c3) {
          c5 = tmp3;
          throw tmp46;
        } else if (tmp2 === tmp48) {
          c4 = tmp2;
        } else {
          c4 = tmp;
        }
      }
    }
  });
  closure_14 = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let obj = { IN_PROGRESS: "in_progress", DECIDED_TEEN: "decided_teen" };
const MINUTE = setDefault.Millis.MINUTE;
let c11 = false;
let c12 = null;
let c13 = 0;
let result = require("set").fileFinishedImporting("modules/age_assurance/ManualReviewActionCreators.tsx");

export const ManualReviewStatus = obj;
export function invalidateManualReviewCache() {
  c12 = null;
}
export const handleManualReviewCta = function handleManualReviewCta() {
  const self = this;
  const apply = _handleManualReviewCta.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
