// Module ID: 14813
// Function ID: 14814
// Name: pressable
// Dependencies: [7975, 14814, 11473, 1114, 2]

// Module 14813 (pressable)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import MobileUserSettings from "MobileUserSettings" /* 7975 */;
import handleDisableAccountDefault from "handleDisableAccount" /* 14814 */;
import createToggle from "createToggle" /* 11473 */;

const pressable = createToggle.createPressable({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["8lQ2rR"]);
  },
  parent: MobileUserSettings.MobileUserSettings.ACCOUNT,
  variant: "danger",
  onPress: function handlePress() {
    handleDisableAccountDefault(true);
  }
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["8lQ2rR"]);
  },
  parent: MobileUserSettings.MobileUserSettings.ACCOUNT,
  variant: "danger",
  onPress: function handlePress() {
    handleDisableAccountDefault(true);
  }
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AccountDeleteSetting.tsx");

export default pressable;
