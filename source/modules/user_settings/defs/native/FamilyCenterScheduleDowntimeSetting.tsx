// Module ID: 14936
// Function ID: 14937
// Name: route
// Dependencies: [7975, 1074, 11473, 1114, 2396, 14937, 2]

// Module 14936 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import messagesProxyDefault from "messagesProxy" /* 2396 */;
import MobileUserSettings from "MobileUserSettings" /* 7975 */;
import createToggle from "createToggle" /* 11473 */;

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault["w/ISB8"]);
  },
  parent: MobileUserSettings.MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  unsearchable: true,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.FAMILY_CENTER_SCHEDULE_DOWNTIME,
  getComponent() {
    return require(14937) /* OverlappingSchedulesWarning */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/FamilyCenterScheduleDowntimeSetting.tsx");

export default route;
