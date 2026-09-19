// Module ID: 15728
// Function ID: 15729
// Name: DisplayMediaUploadsSetting
// Dependencies: [8232, 11723, 1115, 2019, 2]

// Module 15728 (DisplayMediaUploadsSetting)
import util from "util" /* 1115 */;
import UserSettings from "UserSettings" /* 2019 */;
import SettingsConstants from "SettingsConstants" /* 8232 */;
import SettingBuilders from "SettingBuilders" /* 11723 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.VP11No);
  },
  parent: SettingsConstants.MobileUserSettings.CHAT,
  useValue: UserSettings.InlineAttachmentMedia.useSetting,
  onValueChange: UserSettings.InlineAttachmentMedia.updateSetting
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DisplayMediaUploadsSetting.tsx");

export default toggle;
