// Module ID: 15388
// Function ID: 15389
// Name: LightModeThemeSetting
// Dependencies: [1183, 1186, 8079, 1074, 504, 11601, 1114, 15389, 15390, 2]

// Module 15388 (LightModeThemeSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import useSyncedModeThemeName from "useSyncedModeThemeName" /* 15389 */;
import ThemeStore from "ThemeStore" /* 1183 */;

require = fn;
const SystemTheme = fn(1186).SystemTheme;
const SettingBuilders = fn(11601);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.NoFvjZ);
  },
  parent: fn(8079).MobileUserSettings.APPEARANCE,
  usePredicate: function useSyncedModePickerVisible() {
    const items = [ThemeStore];
    return initialize.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
  },
  useTrailing() {
    return useSyncedModeThemeName.useSyncedModeThemeName(SystemTheme.LIGHT);
  },
  screen: {
    route: fn(1074).UserSettingsSections.APPEARANCE_LIGHT_MODE_THEME_PICKER,
    getComponent() {
      return require("SettingsAppearanceLightModeThemePickerScreen").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/LightModeThemeSetting.tsx");

export default route;
