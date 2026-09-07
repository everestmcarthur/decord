// Module ID: 15481
// Function ID: 15482
// Name: route
// Dependencies: [1074, 11473, 1114, 9781, 14453, 15482, 2]

// Module 15481 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import BellIcon from "BellIcon" /* 9781 */;
import getNamedExperiment from "getNamedExperiment" /* 14453 */;
import createToggle from "createToggle" /* 11473 */;

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.HcoRu0);
  },
  parent: null,
  IconComponent: BellIcon.BellIcon,
  usePredicate() {
    return !getNamedExperiment.useIsDeclarativeSettingsUIAvailable("LegacyNotificationsSetting");
  },
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.NOTIFICATIONS,
  getComponent() {
    return require(15482) /* SystemNotificationsSubLabel */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/NotificationsSetting.tsx");

export default route;
