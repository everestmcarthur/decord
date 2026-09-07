// Module ID: 12699
// Function ID: 12700
// Name: useBackHandlerSkipPhoneScreens
// Dependencies: [17, 12682, 5630, 2]
// Exports: default, useBackHandlerMinimizeApp

// Module 12699 (useBackHandlerSkipPhoneScreens)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import useNavigatorBackPressHandler from "useNavigatorBackPressHandler" /* 5630 */;
import ContactSyncLandingPage from "ContactSyncLandingPage" /* 12682 */;

const NativeModules = get_ActivityIndicator.NativeModules;
const ContactSyncScenes = ContactSyncLandingPage.ContactSyncScenes;
const result = set.fileFinishedImporting("modules/contact_sync/native/components/useBackHandlerSkipPhoneScreens.tsx");

export default function useBackHandlerSkipPhoneScreens(arg0, arg1) {
  const _require = arg0;
  dependencyMap = arg1;
  _require(5630).useNavigatorBackPressHandler(() => {
    if (null != closure_1) {
      tmp();
    } else {
      let arr = state;
      const items = [, , ];
      ({ ADD_PHONE: arr2[0], VERIFY_PHONE: arr2[1], VERIFY_PASSWORD: arr2[2] } = closure_1_3);
      const routes = state.getState().routes;
      if (routes.length <= 2) {
        arr = arr.pop();
      } else if (items.includes(routes[routes.length - 2].name)) {
        arr = arr.pop(routes.length - 1);
      }
    }
    return true;
  });
};
export const useBackHandlerMinimizeApp = function useBackHandlerMinimizeApp() {
  useNavigatorBackPressHandler.useNavigatorBackPressHandler(() => {
    MinimizeApp = MinimizeApp.MinimizeApp;
    MinimizeApp.minimizeApp();
    return true;
  });
};
