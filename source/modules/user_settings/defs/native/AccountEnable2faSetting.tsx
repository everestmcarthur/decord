// Module ID: 14868
// Function ID: 14869
// Name: AccountEnable2faSetting
// Dependencies: [1371, 8079, 14767, 14869, 4980, 1114, 11601, 2]

// Module 14868 (AccountEnable2faSetting)
import util from "util" /* 1114 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4980 */;
import SettingsAccountUtils from "SettingsAccountUtils" /* 14767 */;
import TwoFASetupModalActionCreatorsDefault from "TwoFASetupModalActionCreators" /* 14869 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const SettingBuilders = fn(11601);
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.cDgKte);
  },
  parent: fn(8079).MobileUserSettings.ACCOUNT,
  onPress: function onAccountEnable2FASettingPress() {
    const currentUser = UserStore.getCurrentUser();
    let verified;
    if (currentUser != null) {
      verified = currentUser.verified;
    }
    if (verified != null) {
      if (verified) {
        TwoFASetupModalActionCreatorsDefault.open();
      }
    }
    const obj3 = { title: null, body: null };
    const intl = util.intl;
    obj3.title = intl.string(util.t.v740sh);
    const intl2 = util.intl;
    obj3.body = intl2.string(util.t.uggF7o);
    AlertActionCreatorsDefault.show(obj3);
  },
  withArrow: true,
  usePredicate: function useHasAccountEnable2FASetting() {
    return !SettingsAccountUtils.useIsTOTPEnabled();
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountEnable2faSetting.tsx");

export default pressable;
