// Module ID: 11265
// Function ID: 11266
// Name: useCanRemoveAllReactions
// Dependencies: [4199, 1074, 7269, 504, 2]
// Exports: default

// Module 11265 (useCanRemoveAllReactions)
import closure_2 from "getUncachedChannelPermissions" /* 4199 */;
import { Permissions } from "ME" /* 1074 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/reactions/useCanRemoveAllReactions.tsx");

export default function useCanRemoveAllReactions(channel) {
  const _require = channel;
  isActiveChannelOrUnarchivableThread = _require(isActiveChannelOrUnarchivableThread[2]).useIsActiveChannelOrUnarchivableThread(channel);
  const obj = _require(isActiveChannelOrUnarchivableThread[2]);
  const items = [closure_2];
  const items1 = [channel, isActiveChannelOrUnarchivableThread];
  const obj2 = _require(isActiveChannelOrUnarchivableThread[3]);
  return null != channel && _require(isActiveChannelOrUnarchivableThread[3]).useStateFromStores(items, () => closure_1_2.can(closure_1_3.MANAGE_MESSAGES, closure_0) && isActiveChannelOrUnarchivableThread, items1);
};
