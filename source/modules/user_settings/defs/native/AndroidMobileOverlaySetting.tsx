// Module ID: 15257
// Function ID: 15258
// Name: toggle
// Dependencies: [9985, 7975, 504, 1114, 11473, 9996, 2]

// Module 15257 (toggle)
import initialize from "initialize" /* 504 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import dispatcherDefault from "dispatcher" /* 9996 */;
import closure_2 from "getUserAgnosticState" /* 9985 */;
import createToggle from "createToggle" /* 11473 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["9CSZJm"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.VOICE,
  useValue: function useAndroidMobileOverlaySettingValue() {
    const items = [closure_2];
    return initialize.useStateFromStores(items, () => enabled.getEnabled());
  },
  onValueChange: dispatcherDefault.setEnabled,
  useDescription: function useAndroidMobileOverlaySettingDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.Wfoivk);
  },
  usePredicate: require("getUserAgnosticState").isMobileOverlaySupported
};
createToggle = createToggle.createToggle(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/AndroidMobileOverlaySetting.tsx");

export default createToggle;
