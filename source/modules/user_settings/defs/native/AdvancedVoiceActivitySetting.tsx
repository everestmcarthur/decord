// Module ID: 15263
// Function ID: 15264
// Name: toggle
// Dependencies: [1908, 7975, 504, 9094, 1114, 11473, 2]

// Module 15263 (toggle)
import initialize from "initialize" /* 504 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import trackDeviceChangedDefault from "trackDeviceChanged" /* 9094 */;
import closure_3 from "_detectH265HardwareDecode" /* 1908 */;
import createToggle from "createToggle" /* 11473 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.BbESsg);
  },
  parent: require("MobileUserSettings").MobileUserSettings.VOICE,
  useValue: function useAdvancedVoiceActivitySettingValue() {
    const items = [closure_3];
    return initialize.useStateFromStores(items, () => modeOptions.getModeOptions().vadUseKrisp);
  },
  onValueChange: function onAdvancedVoiceActivitySettingValueChange(vadUseKrisp) {
    mode = mode.getMode();
    let obj = trackDeviceChangedDefault;
    obj = { vadUseKrisp };
    obj.setMode(mode, obj);
  },
  useDescription: function useAdvancedVoiceActivitySettingDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.LoOB1F);
  },
  usePredicate: function useHasAdvancedVoiceActivitySetting() {
    const items = [closure_3];
    return initialize.useStateFromStores(items, () => advancedVoiceActivitySupported.isAdvancedVoiceActivitySupported());
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/AdvancedVoiceActivitySetting.tsx");

export default createToggle;
