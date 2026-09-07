// Module ID: 15207
// Function ID: 15208
// Name: route
// Dependencies: [7975, 1074, 15208, 15209, 11473, 1114, 15210, 15212, 2]

// Module 15207 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import MobileUserSettings from "MobileUserSettings" /* 7975 */;
import MAX_SUBSCRIPTION_TIERS from "MAX_SUBSCRIPTION_TIERS" /* 15208 */;
import useUserRoleSubscriptionRelationshipDefault from "useUserRoleSubscriptionRelationship" /* 15209 */;
import TicketIcon from "TicketIcon" /* 15210 */;
import createToggle from "createToggle" /* 11473 */;

let closure_3 = MAX_SUBSCRIPTION_TIERS.UserGuildRoleSubscriptionRelationship;
obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.trSpHX);
  },
  parent: MobileUserSettings.MobileUserSettings.PREMIUM,
  IconComponent: TicketIcon.TicketIcon,
  usePredicate: function useHasGuildRoleSubscriptionsSetting() {
    return useUserRoleSubscriptionRelationshipDefault() === constants.SUBSCRIBED;
  },
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.GUILD_ROLE_SUBSCRIPTIONS,
  getComponent() {
    return require(15212) /* GuildRoleSubscriptionsSectionHeader */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/GuildRoleSubscriptionsSetting.tsx");

export default route;
