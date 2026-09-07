// Module ID: 14759
// Function ID: 14760
// Name: route
// Dependencies: [7975, 1074, 11473, 1114, 2946, 14760, 14723, 2]

// Module 14759 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import messagesProxyDefault from "messagesProxy" /* 2946 */;
import MobileUserSettings from "MobileUserSettings" /* 7975 */;
import AGE_GROUP_CONFIRM_ROW_PROPS from "AGE_GROUP_CONFIRM_ROW_PROPS" /* 14760 */;
import createToggle from "createToggle" /* 11473 */;

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.piqs0o);
  },
  parent: MobileUserSettings.MobileUserSettings.ACCOUNT,
  useTrailing() {
    const intl = getSystemLocale.intl;
    const intl2 = getSystemLocale.intl;
    return "" + intl.string(getSystemLocale.t.XxRj7f) + " \u2022 " + intl2.string(messagesProxyDefault.FTawSP);
  },
  usePredicate: AGE_GROUP_CONFIRM_ROW_PROPS.useShowAssignedAdultAgeGroupRow,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.AGE_GROUP,
  getComponent() {
    return require(14723) /* SettingsAgeGroupHeader */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupAssignedAdultSetting.tsx");

export default route;
