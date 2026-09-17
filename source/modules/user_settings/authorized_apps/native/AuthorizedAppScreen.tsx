// Module ID: 15064
// Function ID: 15065
// Name: AuthorizedAppScreen
// Dependencies: [19, 21, 7108, 1484, 15065, 2]
// Exports: default

// Module 15064 (AuthorizedAppScreen)
import useNavigation from "useNavigation" /* 1484 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7108 */;
import UserSettingsAuthedAppDefault from "UserSettingsAuthedApp" /* 15065 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/authorized_apps/native/AuthorizedAppScreen.tsx");

export default function AuthorizedAppScreen() {
  const settingNavigationRoute = useSettingNavigationRoute.useSettingNavigationRoute();
  const stackNavigation = useNavigation.useStackNavigation();
  const items = [stackNavigation, settingNavigationRoute.params.oauth2Token.application.name];
  const layoutEffect = noop.useLayoutEffect(() => {
    stackNavigation.setOptions({ title: settingNavigationRoute.params.oauth2Token.application.name, headerShown: true });
  }, items);
  return jsx(UserSettingsAuthedAppDefault, { oauth2Token: settingNavigationRoute.params.oauth2Token });
};
