// Module ID: 16189
// Function ID: 16190
// Name: GuildRoleSubscriptionGatedChannelIcon
// Dependencies: [19, 21, 1178, 10393, 2]
// Exports: default

// Module 16189 (GuildRoleSubscriptionGatedChannelIcon)
import native from "native" /* 1178 */;
import _modDef10393 from "module_10393" /* 10393 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/premium_channel/GuildRoleSubscriptionGatedChannelIcon.tsx");

export default function SubscriptionGatedChannelIcon(arg0) {
  ({ locked, isInMainTabsExperiment } = arg0);
  const obj = { source: _modDef10393, size: null, disableColor: null };
  const Sizes = native.Icon.Sizes;
  obj.size = isInMainTabsExperiment ? Sizes.EXTRA_SMALL_10 : Sizes.SMALL;
  obj.disableColor = false !== locked;
  return jsx(native.Icon, { source: _modDef10393, size: null, disableColor: null });
};
