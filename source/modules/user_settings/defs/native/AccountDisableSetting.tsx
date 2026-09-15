// Module ID: 14911
// Function ID: 14912
// Name: AccountDisableSetting
// Dependencies: [8082, 14910, 11606, 1115, 2]

// Module 14911 (AccountDisableSetting)
import util from "util" /* 1115 */;
import SettingsConstants from "SettingsConstants" /* 8082 */;
import handleDisableAccountDefault from "handleDisableAccount" /* 14910 */;
import SettingBuilders from "SettingBuilders" /* 11606 */;
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
