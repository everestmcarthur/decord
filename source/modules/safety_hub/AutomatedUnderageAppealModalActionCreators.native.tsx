// Module ID: 11888
// Function ID: 11889
// Dependencies: [5, 8419, 8412, 21, 11886, 573, 4527, 11889, 1896, 8418, 8429, 8413, 8435, 8411, 4763, 8442, 8579, 2]

// Module 11888
import dispatcherDefault from "dispatcher" /* 573 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4527 */;
import _modDef4763 from "module_4763" /* 4763 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import SafetyHubView from "SafetyHubView" /* 8419 */;
import { AGE_VERIFICATION_GET_STARTED_MODAL_KEY as closure_6 } from "set" /* 8412 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
({ AGE_APPEAL_ACTION_SHEET_NAME: c4, AGE_CHECK_POLL_DELAY_MS: c5 } = SafetyHubView);
let obj = {
  open(classificationId, onClose) {
    obj = dispatcherDefault;
    obj.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN" });
    obj = { classificationId, onClose };
    ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(11889, dependencyMap.paths), closure_4, obj);
  },
  openV2(arg0, onClose) {
    const _require = arg0;
    importDefault = onClose;
    obj = dispatcherDefault;
    obj.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN" });
    if (obj2.isCurrentUserSuspended()) {
      if (tmp4Result.isExpressiveModalV2Enabled(tmp4(8413).AgeVerificationModalEntryPoint.AUTOMATED_UNDERAGE_APPEALS)) {
        const _Math = Math;
        const _Date = Date;
        dependencyMap = Math.floor(Date.now() / 1000);
        callback(function*() {
          if (v0 === 2) {
            v0 = 3;
            HermesBuiltin.throwTypeError();
          } else if (tmp3 === 3) {
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
              v0 = 2;
              if (0 === dependencyMap) {
                if (arg0 === 1) {
                  v0 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  v0 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  closure_1 = tmp4;
                  closure_0 = tmp4;
                  dependencyMap = 1;
                  v0 = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = closure_1_0(8435).shouldShowManualReviewFallback(closure_1_0(8413).AgeVerificationModalEntryPoint.AUTOMATED_UNDERAGE_APPEALS);
                  return obj1;
                }
              } else if (arg0 === 1) {
                v0 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                v0 = 3;
                let obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              } else {
                if (arg1) {
                  obj2 = closure_1_1(8411);
                  const result = obj2.showManualReviewFallbackModal(closure_1_0(8413).AgeVerificationModalEntryPoint.AUTOMATED_UNDERAGE_APPEALS, closure_1_1);
                } else {
                  obj = closure_1_1(4763);
                  const obj3 = { onClose: null };
                  obj3[0] = closure_1;
                  obj.pushLazy(v0(function*() {
                    closure_0 = tmp2;
                    yield closure_1_0(paths[8])(paths[15], paths.paths);
                    closure_0 = arg1.default;
                    return () => closure_2_7(closure_0, {
                      entryPoint: closure_2_0(table[11]).AgeVerificationModalEntryPoint.AUTOMATED_UNDERAGE_APPEALS,
                      onClose() {
                        let tmp;
                        if (callback != null) {
                          tmp = callback();
                        }
                        return tmp;
                      },
                      onComplete() {
                        closure_0 = closure_2;
                        closure_1_0(closure_1_2[4]).resetAgeCheckStatus();
                        obj = closure_1_0(closure_1_2[4]);
                        closure_1_1(closure_1_2[5]).dispatch({ type: "SAFETY_HUB_EXPRESSIVE_MODAL_V2_VERIFICATION_SUBMITTED" });
                        const obj2 = closure_1_1(closure_1_2[5]);
                        closure_1_1(closure_1_2[5]).dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL" });
                        const timerId = setTimeout(() => { ... }, closure_1_5);
                      }
                    });
                  }), obj3, closure_1_6);
                }
                v0 = 3;
              }
            } catch (tmp24) {
              v0 = tmp;
              throw tmp24;
            }
          }
        })();
      }
    }
    obj2 = _require(8418);
    let tmp = importDefault;
    obj = { onClose };
    _modDef4763.pushLazy(callback(function*() {
      closure_0 = tmp2;
      yield closure_1_0(paths[8])(paths[16], paths.paths);
      closure_0 = arg1.default;
      return () => closure_2_7(closure_0, {
        classificationId: closure_0,
        entryPoint: closure_2_0(table[11]).AgeVerificationModalEntryPoint.AUTOMATED_UNDERAGE_APPEALS,
        isRetry: false,
        useEmbeddedMethods: true,
        onComplete() {
          closure_1_8.success();
          if (closure_1 != null) {
            closure_1();
          }
          const result = closure_1_8.start_verification_check();
        }
      });
    }), obj, closure_6);
  },
  close() {
    dispatcherDefault.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE" });
  },
  success() {
    dispatcherDefault.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS" });
  },
  start_verification_check() {
    dispatcherDefault.dispatch({ type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL" });
    const timerId = setTimeout(() => callback(table[4]).checkSuspendedUserAgeVerification(), closure_5);
  }
};
let result = require("set").fileFinishedImporting("modules/safety_hub/AutomatedUnderageAppealModalActionCreators.native.tsx");

export default obj;
