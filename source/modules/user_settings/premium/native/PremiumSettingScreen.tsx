// Module ID: 15038
// Function ID: 15039
// Name: PremiumSettingScreen
// Dependencies: [19, 21, 7068, 1483, 7064, 7487, 2]
// Exports: default

// Module 15038 (PremiumSettingScreen)
import useNavigation from "useNavigation" /* 1483 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 7064 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7068 */;
import UserSettingsPremiumDefault from "UserSettingsPremium" /* 7487 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumSettingScreen.tsx");

export default function PremiumScreen() {
  const settingNavigationRoute = useSettingNavigationRoute.useSettingNavigationRoute();
  const stackNavigation = useNavigation.useStackNavigation();
  let close;
  if (!stackNavigation.canGoBack()) {
    close = UserSettingsModalActionCreatorsDefault.close;
  }
  const obj3 = { onClose: close };
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(UserSettingsPremiumDefault, { onClose: close });
};
