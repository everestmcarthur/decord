// Module ID: 16090
// Function ID: 16091
// Name: useIsHCaptchaModalOpenTracking
// Dependencies: [19, 16041, 16042, 16038, 4495, 4494, 2]
// Exports: useIsHCaptchaModalOpenTracking

// Module 16090 (useIsHCaptchaModalOpenTracking)
import RootNavigationRef from "RootNavigationRef" /* 4495 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = fn(16041).doesRegistrationHaveIdentityType;
const RegistrationConstants = fn(16042);
({ RegisterTransitionSteps: closure_4, RegistrationTransitionActionTypes: hasOwnProperty } = RegistrationConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/utils/useIsHCaptchaModalOpenTracking.tsx");

export const useIsHCaptchaModalOpenTracking = function useIsHCaptchaModalOpenTracking() {
  context = noop.useContext(context(16038).TrackRegistrationContext);
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
