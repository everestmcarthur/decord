// Module ID: 11332
// Function ID: 11333
// Name: useCanRemoveAllReactions
// Dependencies: [4243, 1074, 7321, 504, 2]
// Exports: default

// Module 11332 (useCanRemoveAllReactions)
import PermissionStore from "PermissionStore" /* 4243 */;

const require = globalThis.__r;

const require = fn;
const Permissions = fn(1074).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/reactions/useCanRemoveAllReactions.tsx");

export default function useCanRemoveAllReactions(channel) {
  _require = channel;
  isActiveChannelOrUnarchivableThread = require("ThreadHooks").useIsActiveChannelOrUnarchivableThread(channel);
  const obj = require("ThreadHooks");
  const items = [PermissionStore];
  const items1 = [channel, isActiveChannelOrUnarchivableThread];
  const obj2 = require("initialize");
  return null != channel && require("initialize").useStateFromStores(items, () => PermissionStore.can(Permissions.MANAGE_MESSAGES, closure_0) && isActiveChannelOrUnarchivableThread, items1);
};
