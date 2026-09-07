// Module ID: 15260
// Function ID: 15261
// Name: toggle
// Dependencies: [1908, 7975, 504, 11473, 1114, 9998, 2]

// Module 15260 (toggle)
import initialize from "initialize" /* 504 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import closure_2 from "_detectH265HardwareDecode" /* 1908 */;
import createToggle from "createToggle" /* 11473 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.iWTwu6);
  },
  parent: require("MobileUserSettings").MobileUserSettings.VOICE,
  useValue: function useEchoCancellationSettingValue() {
    const items = [closure_2];
    return initialize.useStateFromStores(items, () => echoCancellation.getEchoCancellation());
  },
  onValueChange: require("handleAutomaticGainControlChange").handleEchoCancellationChange
};
createToggle = createToggle.createToggle(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/EchoCancellationSetting.tsx");

export default createToggle;
