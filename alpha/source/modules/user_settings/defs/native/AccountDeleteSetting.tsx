// Module ID: 15081
// Function ID: 15082
// Name: AccountDeleteSetting
// Dependencies: [8232, 15082, 11723, 1115, 2]

// Module 15081 (AccountDeleteSetting)
import util from "util" /* 1115 */;
import SettingsConstants from "SettingsConstants" /* 8232 */;
import handleDisableAccountDefault from "handleDisableAccount" /* 15082 */;
import SettingBuilders from "SettingBuilders" /* 11723 */;
import size from "module_2" /* 2 */;

const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["8lQ2rR"]);
  },
  parent: SettingsConstants.MobileUserSettings.ACCOUNT,
  variant: "danger",
  onPress: function handlePress() {
    handleDisableAccountDefault(true);
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountDeleteSetting.tsx");

export default pressable;
