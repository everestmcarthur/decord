// Module ID: 8435
// Function ID: 8436
// Name: shouldShowManualReviewFallback
// Dependencies: [5, 8436, 8418, 8437, 573, 8438, 2]
// Exports: shouldShowManualReviewFallback

// Module 8435 (shouldShowManualReviewFallback)
import closure_3 from "asyncGeneratorStep" /* 5 */;

const require = arg1;
let c4 = null;
let result = require("set").fileFinishedImporting("modules/age_assurance/ManualReviewFallbackGate.tsx");

export const shouldShowManualReviewFallback = function shouldShowManualReviewFallback(AUTOMATED_UNDERAGE_APPEALS) {
  if (obj.isManualAgeAssuranceFallbackEnabled(AUTOMATED_UNDERAGE_APPEALS)) {
    if (null == cleanupPromise) {
      cleanupPromise = callback(function*() {
        if (c4 === 2) {
          c4 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp6 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c4 = 2;
            if (0 === c3) {
              if (arg0 === 1) {
                c4 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                const callback = tmp3;
                let lib = tmp7;
                lib = undefined;
                dependencyMap = 1;
                const result = closure_1_0(8418).isCurrentUserSuspended();
                const obj14 = closure_1_0(8437);
                if (result) {
                  c3 = 3;
                  c4 = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = obj14.fetchAgeVerificationMethodsV2SuspendedUser();
                  return obj1;
                } else {
                  c3 = 2;
                  c4 = 1;
                  const obj2 = { value: null, done: false };
                  obj2[0] = obj14.fetchAgeVerificationMethodsV2();
                  return obj2;
                }
                const obj13 = closure_1_0(8418);
              }
            } else if (1 === tmp7) {
              dependencyMap = 0;
              c4 = 3;
              return { value: false, done: true };
            } else {
              if (2 === tmp7) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  dependencyMap = 0;
                  c4 = 3;
                  let obj3 = { value: null, done: true };
                  obj3[0] = arg1;
                  return obj3;
                }
              } else if (3 === tmp7) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  dependencyMap = 0;
                  c4 = 3;
                  const obj4 = { value: null, done: true };
                  obj4[0] = arg1;
                  return obj4;
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                dependencyMap = 0;
                c4 = 3;
                let obj5 = { value: null, done: true };
                obj5[0] = arg1;
                return obj5;
              } else {
                dependencyMap = 0;
                c4 = 3;
                obj = { value: null, done: true };
                obj[0] = 0 === arg1.length;
                return obj;
              }
              lib = arg1;
              obj3 = callback(573);
              const obj6 = { type: "AGE_VERIFICATION_METHODS_V2_LOAD_SUCCESS", methods: null, footerMessage: null, outageBannerMessage: null };
              obj6[1] = lib.methods;
              obj6[2] = lib.footerMessage;
              obj6[3] = lib.outageBannerMessage;
              obj3.dispatch(obj6);
              obj5 = lib(8438);
              c3 = 4;
              c4 = 1;
              const obj7 = { value: null, done: false };
              obj7[0] = obj5.getAvailableMethodsV2(lib.methods);
              return obj7;
            }
          } catch (tmp19) {
            if (tmp4 === dependencyMap) {
              c4 = tmp2;
              throw tmp19;
            } else {
              c3 = tmp;
            }
          }
        }
      })().finally(() => {
        c4 = null;
      });
      const promise = callback(function*() {
        if (c4 === 2) {
          c4 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp6 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c4 = 2;
            if (0 === c3) {
              if (arg0 === 1) {
                c4 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                const callback = tmp3;
                let lib = tmp7;
                lib = undefined;
                dependencyMap = 1;
                const result = closure_1_0(8418).isCurrentUserSuspended();
                const obj14 = closure_1_0(8437);
                if (result) {
                  c3 = 3;
                  c4 = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = obj14.fetchAgeVerificationMethodsV2SuspendedUser();
                  return obj1;
                } else {
                  c3 = 2;
                  c4 = 1;
                  const obj2 = { value: null, done: false };
                  obj2[0] = obj14.fetchAgeVerificationMethodsV2();
                  return obj2;
                }
                const obj13 = closure_1_0(8418);
              }
            } else if (1 === tmp7) {
              dependencyMap = 0;
              c4 = 3;
              return { value: false, done: true };
            } else {
              if (2 === tmp7) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  dependencyMap = 0;
                  c4 = 3;
                  let obj3 = { value: null, done: true };
                  obj3[0] = arg1;
                  return obj3;
                }
              } else if (3 === tmp7) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  dependencyMap = 0;
                  c4 = 3;
                  const obj4 = { value: null, done: true };
                  obj4[0] = arg1;
                  return obj4;
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                dependencyMap = 0;
                c4 = 3;
                let obj5 = { value: null, done: true };
                obj5[0] = arg1;
                return obj5;
              } else {
                dependencyMap = 0;
                c4 = 3;
                obj = { value: null, done: true };
                obj[0] = 0 === arg1.length;
                return obj;
              }
              lib = arg1;
              obj3 = callback(573);
              const obj6 = { type: "AGE_VERIFICATION_METHODS_V2_LOAD_SUCCESS", methods: null, footerMessage: null, outageBannerMessage: null };
              obj6[1] = lib.methods;
              obj6[2] = lib.footerMessage;
              obj6[3] = lib.outageBannerMessage;
              obj3.dispatch(obj6);
              obj5 = lib(8438);
              c3 = 4;
              c4 = 1;
              const obj7 = { value: null, done: false };
              obj7[0] = obj5.getAvailableMethodsV2(lib.methods);
              return obj7;
            }
          } catch (tmp19) {
            if (tmp4 === dependencyMap) {
              c4 = tmp2;
              throw tmp19;
            } else {
              c3 = tmp;
            }
          }
        }
      })();
    }
  } else {
    return Promise.resolve(false);
  }
};
