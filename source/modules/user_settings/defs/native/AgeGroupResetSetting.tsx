// Module ID: 14763
// Function ID: 14764
// Name: pressable
// Dependencies: [7975, 21, 11473, 1114, 2946, 14764, 4906, 14760, 2]

// Module 14763 (pressable)
import set from "set" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import messagesProxyDefault from "messagesProxy" /* 2946 */;
import useAlertStore from "useAlertStore" /* 4906 */;
import MobileUserSettings from "MobileUserSettings" /* 7975 */;
import AGE_GROUP_CONFIRM_ROW_PROPS from "AGE_GROUP_CONFIRM_ROW_PROPS" /* 14760 */;
import SettingsAgeGroupResetAlert from "SettingsAgeGroupResetAlert" /* 14764 */;
import createToggle from "createToggle" /* 11473 */;

const jsx = jsxProd.jsx;
const pressable = createToggle.createPressable({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault["bD//cU"]);
  },
  parent: MobileUserSettings.MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.Gn0SAj);
  },
  onPress() {
    useAlertStore.openAlert(SettingsAgeGroupResetAlert.SETTINGS_AGE_GROUP_RESET_ALERT_ID, jsx(SettingsAgeGroupResetAlert.default, {}));
  },
  withArrow: true,
  usePredicate: AGE_GROUP_CONFIRM_ROW_PROPS.useShowAssignedAdultAgeGroupRow
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault["bD//cU"]);
  },
  parent: MobileUserSettings.MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.Gn0SAj);
  },
  onPress() {
    useAlertStore.openAlert(SettingsAgeGroupResetAlert.SETTINGS_AGE_GROUP_RESET_ALERT_ID, jsx(SettingsAgeGroupResetAlert.default, {}));
  },
  withArrow: true,
  usePredicate: AGE_GROUP_CONFIRM_ROW_PROPS.useShowAssignedAdultAgeGroupRow
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupResetSetting.tsx");

export default pressable;
