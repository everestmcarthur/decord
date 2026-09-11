// Module ID: 15524
// Function ID: 15525
// Name: DisplayMediaUploadsSetting
// Dependencies: [8050, 11564, 1114, 1935, 2]

// Module 15524 (DisplayMediaUploadsSetting)
import util from "util" /* 1114 */;
import UserSettings from "UserSettings" /* 1935 */;
import SettingsConstants from "SettingsConstants" /* 8050 */;
import SettingBuilders from "SettingBuilders" /* 11564 */;
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
