// Module ID: 14847
// Function ID: 14848
// Name: AccountRemove2faSetting
// Dependencies: [8049, 14848, 4950, 1114, 14732, 11562, 14733, 2]

// Module 14847 (AccountRemove2faSetting)
import util from "util" /* 1114 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4950 */;
import SettingsConstants from "SettingsConstants" /* 8049 */;
import MFAActionCreatorsDefault from "MFAActionCreators" /* 14732 */;
import SettingsAccountUtils from "SettingsAccountUtils" /* 14733 */;
import account_MFAUtils from "account/MFAUtils" /* 14848 */;
import SettingBuilders from "SettingBuilders" /* 11562 */;
import size from "module_2" /* 2 */;

const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["D+aE7g"]);
  },
  parent: SettingsConstants.MobileUserSettings.ACCOUNT,
  onPress: function remove2FA() {
    const obj2 = { title: null, body: null, cancelText: null, onConfirm: null };
    const intl = util.intl;
    obj2.title = intl.string(util.t["D+aE7g"]);
    const intl2 = util.intl;
    obj2.body = intl2.string(util.t.EA4ZEk);
    const intl3 = util.intl;
    obj2.cancelText = intl3.string(util.t["ETE/oC"]);
    obj2.onConfirm = function onConfirm() {
      return MFAActionCreatorsDefault.disable();
    };
    AlertActionCreatorsDefault.show(obj2);
  },
  useIsDisabled() {
    return null !== account_MFAUtils.use2FARemoveDisableReason();
  },
  useDescription: account_MFAUtils.use2FARemoveDisableReason,
  usePredicate: SettingsAccountUtils.useIsTOTPEnabled
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountRemove2faSetting.tsx");

export default pressable;
