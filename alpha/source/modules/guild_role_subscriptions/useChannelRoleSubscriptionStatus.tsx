// Module ID: 5177
// Function ID: 5178
// Name: useChannelRoleSubscriptionStatus
// Dependencies: [2014, 1958, 4361, 1074, 504, 2]
// Exports: default

// Module 5177 (useChannelRoleSubscriptionStatus)
import GatedChannelStore from "GatedChannelStore" /* 2014 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import PermissionStore from "PermissionStore" /* 4361 */;

const require = globalThis.__r;

const require = fn;
function getChannelRoleSubscriptionStatus(id, ChannelStore, GatedChannelStore, PermissionStore) {
  let obj = ChannelStore;
  if (ChannelStore === undefined) {
    obj = ChannelStore;
  }
  let obj2 = GatedChannelStore;
  if (GatedChannelStore === undefined) {
    obj2 = GatedChannelStore;
  }
  let tmp = PermissionStore;
  if (PermissionStore === undefined) {
    tmp = PermissionStore;
  }
  const channel = obj.getChannel(id);
  let result;
  if (channel != null) {
    result = channel.isRoleSubscriptionTemplatePreviewChannel();
  }
  if (result) {
    let obj3 = { isSubscriptionGated: true, needSubscriptionToAccess: true };
  } else {
    if (null != channel) {
      if (obj2.isChannelGated(channel.guild_id, channel.id)) {
        const can = tmp.can;
        let obj4 = Permissions;
        if (channel.isGuildVocal()) {
          let tmp3 = !can(obj4.CONNECT, channel);
        } else {
          tmp3 = !can(obj4.VIEW_CHANNEL, channel);
        }
        obj4 = { isSubscriptionGated: true, needSubscriptionToAccess: tmp3 };
      }
    }
    obj3 = closure_6;
  }
  return obj3;
}
const Permissions = fn(1074).Permissions;
let closure_6 = { needSubscriptionToAccess: false, isSubscriptionGated: false };
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/useChannelRoleSubscriptionStatus.tsx");

export default function useChannelRoleSubscriptionStatus(arg0) {
  _require = arg0;
  const items = [ChannelStore, GatedChannelStore, PermissionStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStoresObject(items, () => getChannelRoleSubscriptionStatus(closure_0, ChannelStore, GatedChannelStore, PermissionStore), items1);
};
export { getChannelRoleSubscriptionStatus };
