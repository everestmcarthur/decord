// Module ID: 5188
// Function ID: 5189
// Name: isSoundValid
// Dependencies: [1958, 4361, 1372, 5184, 1085, 4380, 2]
// Exports: default

// Module 5188 (isSoundValid)
import PremiumUtilsDefault from "PremiumUtils" /* 4380 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import PermissionStore from "PermissionStore" /* 4361 */;
import UserStore from "UserStore" /* 1372 */;

const DEFAULT_SOUND_GUILD_ID = fn(5184).DEFAULT_SOUND_GUILD_ID;
const Permissions = fn(1085).Permissions;
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/utils/isSoundValid.tsx");

export default function isSoundValid(guildId, arg1, arg2) {
  const channel = ChannelStore.getChannel(arg2);
  guildId = undefined;
  if (guildId != null) {
    guildId = guildId.guildId;
  }
  if (guildId === DEFAULT_SOUND_GUILD_ID) {
    return true;
  } else {
    let guildId1;
    if (guildId != null) {
      guildId1 = guildId.guildId;
    }
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    if (guildId1 !== guild_id) {
      let guildId2;
      if (guildId != null) {
        guildId2 = guildId.guildId;
      }
      if (guildId2 !== arg1) {
        let canResult = null == channel;
        const result = PremiumUtilsDefault.canUseSoundboardEverywhere(UserStore.getCurrentUser());
        if (!canResult) {
          canResult = null == channel.guild_id;
        }
        if (!canResult) {
          canResult = PermissionStore.can(Permissions.USE_EXTERNAL_SOUNDS, channel);
        }
        if (canResult) {
          canResult = result;
        }
        return canResult;
      }
    }
    return true;
  }
};
