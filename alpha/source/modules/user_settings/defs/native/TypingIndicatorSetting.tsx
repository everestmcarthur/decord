// Module ID: 15621
// Function ID: 15622
// Name: TypingIndicatorSetting
// Dependencies: [1074, 14988, 2027, 11723, 1115, 3680, 15622, 12218, 15624, 15673, 2]

// Module 15621 (TypingIndicatorSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import dismissible_content from "dismissible_content" /* 2027 */;
import _modDef3680 from "module_3680" /* 3680 */;
import CustomTypingIndicatorExperiment from "CustomTypingIndicatorExperiment" /* 12218 */;
import ChatDotsIcon from "ChatDotsIcon" /* 15622 */;
import SettingRendererTypes from "SettingRendererTypes" /* 15673 */;
import DismissibleBadgeUtils from "DismissibleBadgeUtils" /* 14988 */;
import SettingBuilders from "SettingBuilders" /* 11723 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const dismissibleBadgeRouteProps = DismissibleBadgeUtils.createDismissibleBadgeRouteProps(dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE);
({ useTrailing, usePreNavigationAction } = dismissibleBadgeRouteProps);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3680["pT+BVM"]);
  },
  parent: null,
  IconComponent: ChatDotsIcon.ChatDotsIcon,
  useTrailing,
  usePreNavigationAction,
  usePredicate() {
    return "settings" === CustomTypingIndicatorExperiment.useCustomTypingIndicatorConfig("TypingIndicatorSetting").entryPoint;
  },
  screen: {
    route: Constants.UserSettingsSections.TYPING_INDICATOR,
    getComponent() {
      return require("CustomTypingIndicatorEditScreen").default;
    },
    usePersistentBadge() {
      return { badgeType: SettingRendererTypes.SettingsBadgeType.BETA };
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/TypingIndicatorSetting.tsx");

export default route;
