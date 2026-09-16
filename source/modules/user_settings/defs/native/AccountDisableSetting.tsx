// Module ID: 14927
// Function ID: 14928
// Name: AccountDisableSetting
// Dependencies: [8091, 14926, 11614, 1115, 2]

// Module 14927 (AccountDisableSetting)
import util from "util" /* 1115 */;
import SettingsConstants from "SettingsConstants" /* 8091 */;
import handleDisableAccountDefault from "handleDisableAccount" /* 14926 */;
import SettingBuilders from "SettingBuilders" /* 11614 */;
import size from "module_2" /* 2 */;

const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.jf5GGb);
  },
  parent: SettingsConstants.MobileUserSettings.ACCOUNT,
  onPress: function onAccountDisablePress() {
    handleDisableAccountDefault(false);
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountDisableSetting.tsx");

export default pressable;
