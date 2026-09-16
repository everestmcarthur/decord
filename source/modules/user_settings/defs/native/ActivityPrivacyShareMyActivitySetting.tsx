// Module ID: 16031
// Function ID: 16032
// Name: ActivityPrivacyShareMyActivitySetting
// Dependencies: [8091, 11614, 1115, 2563, 1936, 2]

// Module 16031 (ActivityPrivacyShareMyActivitySetting)
import util from "util" /* 1115 */;
import UserSettings from "UserSettings" /* 1936 */;
import _modDef2563 from "module_2563" /* 2563 */;
import SettingsConstants from "SettingsConstants" /* 8091 */;
import SettingBuilders from "SettingBuilders" /* 11614 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2563.WhdCGP);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2563.UQ9RHJ);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.ShowCurrentGame.useSetting,
  onValueChange: UserSettings.ShowCurrentGame.updateSetting
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ActivityPrivacyShareMyActivitySetting.tsx");

export default toggle;
