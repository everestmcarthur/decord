// Module ID: 15998
// Function ID: 15999
// Name: useIsHCaptchaModalOpenTracking
// Dependencies: [19, 15949, 15950, 15946, 4418, 4417, 2]
// Exports: useIsHCaptchaModalOpenTracking

// Module 15998 (useIsHCaptchaModalOpenTracking)
import closure_2 from "noop" /* 19 */;
import { doesRegistrationHaveIdentityType as closure_3 } from "useRegistrationUIStore" /* 15949 */;
import RegistrationTransitionActionTypes from "RegistrationTransitionActionTypes" /* 15950 */;

const require = arg1;
({ RegisterTransitionSteps: c4, RegistrationTransitionActionTypes: c5 } = RegistrationTransitionActionTypes);
const result = require("set").fileFinishedImporting("modules/auth/native/components/utils/useIsHCaptchaModalOpenTracking.tsx");

export const useIsHCaptchaModalOpenTracking = function useIsHCaptchaModalOpenTracking() {
  context = React.useContext(context(15946).TrackRegistrationContext);
  const items = [context];
  const layoutEffect = React.useLayoutEffect(() => {
    const rootNavigationRef = context(closure_1_1[4]).getRootNavigationRef();
    let current;
    if (rootNavigationRef != null) {
      current = rootNavigationRef.current;
    }
    if (null != current) {
      return rootNavigationRef.addListener("state", () => {
        let obj = closure_1_0(closure_1_1[5]);
        let isModalOpenResult = obj.isModalOpen("hcaptcha");
        if (isModalOpenResult) {
          isModalOpenResult = closure_1_3();
        }
        if (isModalOpenResult) {
          obj = { step: null, actionType: null };
          obj[0] = closure_1_4.CAPTCHA;
          obj[1] = closure_1_5.VIEWED;
          callback(obj);
        }
      });
    }
    let obj = context(closure_1_1[4]);
  }, items);
};
