// Module ID: 15529
// Function ID: 15530
// Name: AutoplayGifSetting
// Dependencies: [8091, 11614, 1115, 1936, 2]

// Module 15529 (AutoplayGifSetting)
import util from "util" /* 1115 */;
import UserSettings from "UserSettings" /* 1936 */;
import SettingsConstants from "SettingsConstants" /* 8091 */;
import SettingBuilders from "SettingBuilders" /* 11614 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["9ptHSs"]);
  },
  parent: SettingsConstants.MobileUserSettings.ACCESSIBILITY,
  useValue: UserSettings.GifAutoPlay.useSetting,
  onValueChange: UserSettings.GifAutoPlay.updateSetting
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AutoplayGifSetting.tsx");

export default toggle;
