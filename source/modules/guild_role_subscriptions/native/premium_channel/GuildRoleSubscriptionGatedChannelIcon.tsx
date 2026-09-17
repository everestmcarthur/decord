// Module ID: 16278
// Function ID: 16279
// Name: GuildRoleSubscriptionGatedChannelIcon
// Dependencies: [19, 21, 1177, 10449, 2]
// Exports: default

// Module 16278 (GuildRoleSubscriptionGatedChannelIcon)
import native from "native" /* 1177 */;
import _modDef10449 from "module_10449" /* 10449 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/premium_channel/GuildRoleSubscriptionGatedChannelIcon.tsx");

export default function SubscriptionGatedChannelIcon(arg0) {
  ({ locked, isInMainTabsExperiment } = arg0);
  const obj = { source: _modDef10449, size: null, disableColor: null };
  const Sizes = native.Icon.Sizes;
  obj.size = isInMainTabsExperiment ? Sizes.EXTRA_SMALL_10 : Sizes.SMALL;
  obj.disableColor = false !== locked;
  return jsx(native.Icon, { source: _modDef10449, size: null, disableColor: null });
};
