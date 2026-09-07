// Module ID: 15305
// Function ID: 15306
// Name: toggle
// Dependencies: [1183, 7975, 504, 15180, 11473, 1114, 2]

// Module 15305 (toggle)
import initialize from "initialize" /* 504 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import handleSaveTheme from "handleSaveTheme" /* 15180 */;
import closure_2 from "handleThemeChange" /* 1183 */;
import createToggle from "createToggle" /* 11473 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.c445ix);
  },
  parent: require("MobileUserSettings").MobileUserSettings.APPEARANCE,
  useValue: function useSameAsDeviceThemeValue() {
    const items = [closure_2];
    return initialize.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
  },
  onValueChange: function onSameAsDeviceThemeValueChange(arg0) {
    const obj = handleSaveTheme;
    if (arg0) {
      const result = obj.enableSameAsDeviceTheme();
    } else {
      const result1 = obj.disableSameAsDeviceTheme();
    }
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["+tBsvs"]);
  }
};
createToggle = createToggle.createToggle(createToggle);
let result = require("set").fileFinishedImporting("modules/user_settings/defs/native/SameAsDeviceThemeSetting.tsx");

export default createToggle;
