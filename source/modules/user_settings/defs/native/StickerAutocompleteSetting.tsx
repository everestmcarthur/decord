// Module ID: 15533
// Function ID: 15534
// Name: StickerAutocompleteSetting
// Dependencies: [8050, 11564, 1114, 1935, 15526, 2]

// Module 15533 (StickerAutocompleteSetting)
import util from "util" /* 1114 */;
import UserSettings from "UserSettings" /* 1935 */;
import SettingsConstants from "SettingsConstants" /* 8050 */;
import UserSettingsText from "UserSettingsText" /* 15526 */;
import SettingBuilders from "SettingBuilders" /* 11564 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["29xPVZ"]);
  },
  parent: SettingsConstants.MobileUserSettings.CHAT,
  useValue: UserSettings.IncludeStickersInAutocomplete.useSetting,
  onValueChange: UserSettingsText.setStickerAutocomplete
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/StickerAutocompleteSetting.tsx");

export default toggle;
