// Module ID: 14815
// Function ID: 14816
// Name: AccountDisableSetting
// Dependencies: [7976, 14814, 11473, 1114, 2]

// Module 14815 (AccountDisableSetting)
import util from "util" /* 1114 */;
import SettingsConstants from "SettingsConstants" /* 7976 */;
import handleDisableAccountDefault from "handleDisableAccount" /* 14814 */;
import SettingBuilders from "SettingBuilders" /* 11473 */;
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
