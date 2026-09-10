// Module ID: 10007
// Function ID: 10008
// Name: useIsVoiceChannelFull
// Dependencies: [1979, 4243, 4624, 1085, 504, 4750, 2]
// Exports: default, useIsVoiceChannelLocked

// Module 10007 (useIsVoiceChannelFull)
import ChannelUtils from "ChannelUtils" /* 4750 */;
import GuildStore from "GuildStore" /* 1979 */;
import PermissionStore from "PermissionStore" /* 4243 */;
import VoiceStateStore from "VoiceStateStore" /* 4624 */;

const require = globalThis.__r;

require = fn;
const Permissions = fn(1085).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_calls/useIsVoiceChannelFull.tsx");

export default function useIsVoiceChannelFull(arg0) {
  _require = arg0;
  const items = [VoiceStateStore, GuildStore];
  return require("initialize").useStateFromStores(items, () => ChannelUtils.isChannelFull(closure_0, VoiceStateStore, GuildStore));
};
export const useIsVoiceChannelLocked = function useIsVoiceChannelLocked(channel) {
  _require = channel;
  const items = [PermissionStore];
  const items1 = [channel];
  return require("initialize").useStateFromStores(items, () => {
    let tmp2 = null == closure_0;
    if (!tmp2) {
      tmp2 = !PermissionStore.can(Permissions.CONNECT, tmp);
    }
    return tmp2;
  }, items1);
};
