// Module ID: 17834
// Function ID: 17835
// Name: GuildSettingsRoleSubscriptionsEnableMonetization
// Dependencies: [19, 1979, 21, 504, 17796, 16635, 1114, 2]
// Exports: default

// Module 17834 (GuildSettingsRoleSubscriptionsEnableMonetization)
import UnavailableNoticeDefault from "UnavailableNotice" /* 16635 */;
import PlaceholderDefault from "Placeholder" /* 17796 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1979 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsEnableMonetization.tsx");

export default function GuildSubscriptionEnableMonetization(guildId) {
  guildId = guildId.guildId;
  const items = [GuildStore];
  if (null == obj.useStateFromStores(items, () => GuildStore.getGuild(guildId))) {
    let tmp5 = jsx(PlaceholderDefault, {});
  } else {
    const obj2 = { brightTitle: true, title: null, description: null };
    const intl = tmp(1114).intl;
    obj2.title = intl.string(tmp(1114).t.KeeWp0);
    const intl2 = tmp(1114).intl;
    obj2.description = intl2.string(tmp(1114).t["tJLG+L"]);
    tmp5 = jsx(UnavailableNoticeDefault, { brightTitle: true, title: null, description: null });
  }
  return tmp5;
};
