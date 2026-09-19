// Module ID: 15489
// Function ID: 15490
// Name: GuildRoleSubscriptionCancelSettingScreen
// Dependencies: [19, 21, 7234, 15490, 2]
// Exports: default

// Module 15489 (GuildRoleSubscriptionCancelSettingScreen)
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7234 */;
import UserSettingsGuildRoleSubscriptionsCancelDefault from "UserSettingsGuildRoleSubscriptionsCancel" /* 15490 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/billing/native/GuildRoleSubscriptionCancelSettingScreen.tsx");

export default function GuildRoleSubscriptionCancelSettingScreen() {
  const settingNavigationRoute = useSettingNavigationRoute.useSettingNavigationRoute();
  const obj2 = {};
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(UserSettingsGuildRoleSubscriptionsCancelDefault, {});
};
