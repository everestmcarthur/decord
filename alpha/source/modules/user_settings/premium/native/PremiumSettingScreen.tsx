// Module ID: 15255
// Function ID: 15256
// Name: PremiumSettingScreen
// Dependencies: [19, 21, 7234, 1484, 7230, 7653, 2]
// Exports: default

// Module 15255 (PremiumSettingScreen)
import useNavigation from "useNavigation" /* 1484 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 7230 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7234 */;
import UserSettingsPremiumDefault from "UserSettingsPremium" /* 7653 */;
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
