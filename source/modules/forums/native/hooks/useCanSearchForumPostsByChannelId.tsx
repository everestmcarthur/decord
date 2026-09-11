// Module ID: 13356
// Function ID: 13357
// Name: useCanSearchForumPostsByChannelId
// Dependencies: [1957, 4245, 1074, 504, 2]
// Exports: useCanSearchForumPostsByChannelId

// Module 13356 (useCanSearchForumPostsByChannelId)
import ChannelStore from "ChannelStore" /* 1957 */;
import PermissionStore from "PermissionStore" /* 4245 */;

const require = globalThis.__r;

const require = fn;
const Permissions = fn(1074).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/hooks/useCanSearchForumPostsByChannelId.tsx");

export const useCanSearchForumPostsByChannelId = function useCanSearchForumPostsByChannelId(channelId) {
  _require = channelId;
  const items = [ChannelStore, PermissionStore];
  return require("initialize").useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(closure_0);
    let canResult = null != channel;
    if (canResult) {
      canResult = PermissionStore.can(Permissions.READ_MESSAGE_HISTORY, channel);
    }
    return canResult;
  });
};
