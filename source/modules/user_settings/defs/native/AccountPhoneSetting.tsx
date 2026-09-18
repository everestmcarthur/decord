// Module ID: 14929
// Function ID: 14930
// Name: AccountPhoneSetting
// Dependencies: [1372, 8194, 7239, 504, 4925, 7238, 1897, 7241, 11714, 1115, 2]

// Module 14929 (AccountPhoneSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4925 */;
import PhoneActionCreators from "PhoneActionCreators" /* 7241 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
let closure_4 = fn(7239).PHONE_VERIFICATION_MODAL_KEY;
const SettingBuilders = fn(11714);
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.dEYpSt);
  },
  parent: fn(8194).MobileUserSettings.ACCOUNT,
  useTrailing: function useAccountPhoneSettingTrailing() {
    const items = [UserStore];
    return initialize.useStateFromStores(items, () => {
      currentUser = currentUser.getCurrentUser();
      let phone;
      if (currentUser != null) {
        phone = currentUser.phone;
      }
      return phone;
    });
  },
  onPress: function onAccountPhoneSettingPress() {
    const obj2 = { allowDeletePhone: true, reason: null };
    const obj = ModalActionCreatorsDefault;
    obj2.reason = PhoneActionCreators.ChangePhoneReason.USER_SETTINGS_UPDATE;
    obj.pushLazy(asyncRequireImpl(7238, dependencyMap.paths), obj2, closure_4);
  },
  withArrow: true
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountPhoneSetting.tsx");

export default pressable;
