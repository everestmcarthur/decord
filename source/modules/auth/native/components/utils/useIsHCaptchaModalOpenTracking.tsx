// Module ID: 16066
// Function ID: 16067
// Name: useIsHCaptchaModalOpenTracking
// Dependencies: [19, 16017, 16018, 16014, 4465, 4464, 2]
// Exports: useIsHCaptchaModalOpenTracking

// Module 16066 (useIsHCaptchaModalOpenTracking)
import RootNavigationRef from "RootNavigationRef" /* 4465 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = fn(16017).doesRegistrationHaveIdentityType;
const RegistrationConstants = fn(16018);
({ RegisterTransitionSteps: closure_4, RegistrationTransitionActionTypes: hasOwnProperty } = RegistrationConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/utils/useIsHCaptchaModalOpenTracking.tsx");

export const useIsHCaptchaModalOpenTracking = function useIsHCaptchaModalOpenTracking() {
  context = noop.useContext(context(16014).TrackRegistrationContext);
  const items = [context];
  const layoutEffect = noop.useLayoutEffect(() => {
    const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
    let current;
    if (rootNavigationRef != null) {
      current = rootNavigationRef.current;
    }
    if (null != current) {
      return rootNavigationRef.addListener("state", () => {
        let isModalOpenResult = context(dependencyMap[5]).isModalOpen("hcaptcha");
        if (isModalOpenResult) {
          isModalOpenResult = closure_2_3();
        }
        if (isModalOpenResult) {
          const obj2 = { step: constants.CAPTCHA, actionType: constants2.VIEWED };
          closure_1_0(obj2);
        }
      });
    }
  }, items);
};
