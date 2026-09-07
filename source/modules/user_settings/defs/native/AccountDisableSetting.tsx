// Module ID: 14815
// Function ID: 14816
// Name: pressable
// Dependencies: [7975, 14814, 11473, 1114, 2]

// Module 14815 (pressable)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import MobileUserSettings from "MobileUserSettings" /* 7975 */;
import handleDisableAccountDefault from "handleDisableAccount" /* 14814 */;
import createToggle from "createToggle" /* 11473 */;

const pressable = createToggle.createPressable({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.jf5GGb);
  },
  parent: MobileUserSettings.MobileUserSettings.ACCOUNT,
  onPress: function onAccountDisablePress() {
    handleDisableAccountDefault(false);
  }
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.jf5GGb);
  },
  parent: MobileUserSettings.MobileUserSettings.ACCOUNT,
  onPress: function onAccountDisablePress() {
    handleDisableAccountDefault(false);
  }
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AccountDisableSetting.tsx");

export default pressable;
