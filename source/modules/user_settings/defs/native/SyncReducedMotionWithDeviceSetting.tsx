// Module ID: 15419
// Function ID: 15420
// Name: toggle
// Dependencies: [4552, 7975, 504, 14440, 11473, 1114, 2]

// Module 15419 (toggle)
import initialize from "initialize" /* 504 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import setFontSize from "setFontSize" /* 14440 */;
import closure_2 from "maybeApplyNoTextColorForLightCustomTheme" /* 4552 */;
import createToggle from "createToggle" /* 11473 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["St+DJK"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.ACCESSIBILITY,
  useValue: function useReducedMotionSyncSettingValue() {
    const items = [closure_2];
    return initialize.useStateFromStores(items, () => "auto" === obj.rawPrefersReducedMotion);
  },
  onValueChange: function onReducedMotionSyncSettingValueChange(arg0) {
    const obj = setFontSize;
    let str = "auto";
    if (!arg0) {
      str = obj.systemPrefersReducedMotion;
    }
    const result = obj.setPrefersReducedMotion(str);
  }
};
createToggle = createToggle.createToggle(createToggle);
let result = require("set").fileFinishedImporting("modules/user_settings/defs/native/SyncReducedMotionWithDeviceSetting.tsx");

export default createToggle;
