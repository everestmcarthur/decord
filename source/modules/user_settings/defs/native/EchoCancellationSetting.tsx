// Module ID: 15318
// Function ID: 15319
// Name: EchoCancellationSetting
// Dependencies: [1908, 8050, 504, 11564, 1114, 10085, 2]

// Module 15318 (EchoCancellationSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;

require = fn;
const SettingBuilders = fn(11564);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.iWTwu6);
  },
  parent: fn(8050).MobileUserSettings.VOICE,
  useValue: function useEchoCancellationSettingValue() {
    const items = [MediaEngineStore];
    return initialize.useStateFromStores(items, () => echoCancellation.getEchoCancellation());
  },
  onValueChange: fn(10085).handleEchoCancellationChange
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/EchoCancellationSetting.tsx");

export default toggle;
