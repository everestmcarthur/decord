// Module ID: 15387
// Function ID: 15388
// Name: SameAsDeviceThemeSetting
// Dependencies: [1183, 8079, 504, 15257, 11601, 1114, 2]

// Module 15387 (SameAsDeviceThemeSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import UserSettingsAppearanceThemeUtils from "UserSettingsAppearanceThemeUtils" /* 15257 */;
import ThemeStore from "ThemeStore" /* 1183 */;

require = fn;
const SettingBuilders = fn(11601);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.c445ix);
  },
  parent: fn(8079).MobileUserSettings.APPEARANCE,
  useValue: function useSameAsDeviceThemeValue() {
    const items = [ThemeStore];
    return initialize.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
  },
  onValueChange: function onSameAsDeviceThemeValueChange(arg0) {
    const obj = UserSettingsAppearanceThemeUtils;
    if (arg0) {
      const result = obj.enableSameAsDeviceTheme();
    } else {
      const result1 = obj.disableSameAsDeviceTheme();
    }
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t["+tBsvs"]);
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/SameAsDeviceThemeSetting.tsx");

export default toggle;
