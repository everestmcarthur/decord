// Module ID: 14865
// Function ID: 14866
// Name: AccountDeleteSetting
// Dependencies: [8050, 14866, 11564, 1114, 2]

// Module 14865 (AccountDeleteSetting)
import util from "util" /* 1114 */;
import SettingsConstants from "SettingsConstants" /* 8050 */;
import handleDisableAccountDefault from "handleDisableAccount" /* 14866 */;
import SettingBuilders from "SettingBuilders" /* 11564 */;
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
