// Module ID: 14783
// Function ID: 14784
// Name: pressable
// Dependencies: [1371, 7975, 14684, 14784, 4904, 1114, 11473, 2]

// Module 14783 (pressable)
import getSystemLocale from "getSystemLocale" /* 1114 */;
import setDefault from "set" /* 4904 */;
import useIs2FAEnabled from "useIs2FAEnabled" /* 14684 */;
import _modDef14784 from "module_14784" /* 14784 */;
import closure_3 from "mergeGuildAvatar" /* 1371 */;
import createToggle from "createToggle" /* 11473 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.cDgKte);
  },
  parent: require("MobileUserSettings").MobileUserSettings.ACCOUNT,
  onPress: function onAccountEnable2FASettingPress() {
    currentUser = currentUser.getCurrentUser();
    let verified;
    if (currentUser != null) {
      verified = currentUser.verified;
    }
    if (verified != null) {
      if (verified) {
        let obj = _modDef14784;
        obj.open();
      }
    }
    obj = { title: null, body: null };
    const intl = getSystemLocale.intl;
    obj[0] = intl.string(getSystemLocale.t.v740sh);
    const intl2 = getSystemLocale.intl;
    obj[1] = intl2.string(getSystemLocale.t.uggF7o);
    setDefault.show(obj);
  },
  withArrow: true,
  usePredicate: function useHasAccountEnable2FASetting() {
    return !useIs2FAEnabled.useIsTOTPEnabled();
  }
};
createToggle = createToggle.createPressable(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/AccountEnable2faSetting.tsx");

export default createToggle;
