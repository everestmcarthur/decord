// Module ID: 15524
// Function ID: 15525
// Name: dismissibleBadgeRouteProps
// Dependencies: [1074, 14722, 1943, 11473, 1114, 15525, 13367, 15527, 2]

// Module 15524 (dismissibleBadgeRouteProps)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import DismissibleContent from "DismissibleContent" /* 1943 */;
import fetchCurrentAppIcon from "fetchCurrentAppIcon" /* 13367 */;
import SettingsItemAppIconDefault from "SettingsItemAppIcon" /* 15525 */;
import useAlwaysShow from "useAlwaysShow" /* 14722 */;
import createToggle from "createToggle" /* 11473 */;

const dismissibleBadgeRouteProps = useAlwaysShow.createDismissibleBadgeRouteProps(DismissibleContent.DismissibleContent.CUSTOM_APP_ICONS_NEW_BADGE);
({ useTrailing, usePreNavigationAction } = dismissibleBadgeRouteProps);
obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.N4YDao);
  },
  parent: null,
  IconComponent: SettingsItemAppIconDefault,
  useTrailing,
  usePreNavigationAction,
  usePredicate() {
    return fetchCurrentAppIcon.isAppIconsSupported();
  },
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.APP_ICONS,
  getComponent() {
    return require(15527).default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AppIconsSetting.tsx");

export default route;
