// Module ID: 15309
// Function ID: 15310
// Name: route
// Dependencies: [1183, 1186, 7975, 1074, 504, 11473, 1114, 15307, 15310, 2]

// Module 15309 (route)
import initialize from "initialize" /* 504 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import useSyncedModeThemeName from "useSyncedModeThemeName" /* 15307 */;
import closure_2 from "handleThemeChange" /* 1183 */;
import { SystemTheme } from "SystemThemeState" /* 1186 */;
import createToggle from "createToggle" /* 11473 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["EgvHH/"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.APPEARANCE,
  usePredicate: function useSyncedModePickerVisible() {
    const items = [closure_2];
    return initialize.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
  },
  useTrailing() {
    return useSyncedModeThemeName.useSyncedModeThemeName(SystemTheme.DARK);
  },
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.APPEARANCE_DARK_MODE_THEME_PICKER,
  getComponent() {
    return require(15310) /* SettingsAppearanceDarkModeThemePickerScreen */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/DarkModeThemeSetting.tsx");

export default createToggle;
