// Module ID: 18087
// Function ID: 18088
// Name: GuildSettingsRoleSubscriptionsEnableMonetization
// Dependencies: [19, 1980, 21, 504, 18049, 16797, 1115, 2]
// Exports: default

// Module 18087 (GuildSettingsRoleSubscriptionsEnableMonetization)
import UnavailableNoticeDefault from "UnavailableNotice" /* 16797 */;
import PlaceholderDefault from "Placeholder" /* 18049 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1980 */;

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
    const intl = tmp(1115).intl;
    obj2.title = intl.string(tmp(1115).t.KeeWp0);
    const intl2 = tmp(1115).intl;
    obj2.description = intl2.string(tmp(1115).t["tJLG+L"]);
    tmp5 = jsx(UnavailableNoticeDefault, { brightTitle: true, title: null, description: null });
  }
  return tmp5;
};
