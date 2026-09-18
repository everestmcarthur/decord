// Module ID: 5582
// Function ID: 5583
// Name: SelectedChannelActionCreatorsAdditional
// Dependencies: [1958, 1980, 5583, 4361, 2012, 4543, 1372, 4741, 5584, 4867, 5585, 4419, 5586, 5587, 4689, 5600, 1897, 13830, 1255, 573, 2]
// Exports: getChannelSelectionOrigin, selectVoiceChannelAdditional

// Module 5582 (SelectedChannelActionCreatorsAdditional)
import DispatcherDefault from "Dispatcher" /* 573 */;
import v1 from "v1" /* 1255 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import GuildStore from "GuildStore" /* 1980 */;
import GuildVerificationStore from "GuildVerificationStore" /* 5583 */;
import PermissionStore from "PermissionStore" /* 4361 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2012 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4543 */;
import UserStore from "UserStore" /* 1372 */;
import VoiceStateStore from "VoiceStateStore" /* 4741 */;

const require = globalThis.__r;

require = fn;
const STAGE_BOOSTING_SHEET_KEY = fn(5584).STAGE_BOOSTING_SHEET_KEY;
const size = fn(2);
const result = size.fileFinishedImporting("actions/SelectedChannelActionCreatorsAdditional.native.tsx");

export const getChannelSelectionOrigin = function getChannelSelectionOrigin() {
  let guildId = SelectedGuildStore.getGuildId();
  if (guildId == null) {
    guildId = null;
  }
  const obj = { fromGuildId: guildId, fromChannelId: null };
  let channelId = SelectedChannelStore.getChannelId(guildId, false);
  if (channelId == null) {
    channelId = null;
  }
  obj.fromChannelId = channelId;
  return obj;
};
export const selectVoiceChannelAdditional = function selectVoiceChannelAdditional(id, guildId, flag, flag2, arg4) {
  _require = id;
  importDefault = guildId;
  if (flag === undefined) {
    flag = false;
  }
  if (flag2 === undefined) {
    flag2 = false;
  }
  let obj = arg4;
  if (arg4 === undefined) {
    obj = {};
  }
  let flag3 = obj.lockVoiceStateForResume;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let flag4 = obj.bypassIdleUpdate;
  if (flag4 === undefined) {
    flag4 = false;
  }
  const channel = flag2.getChannel(id);
  const currentUser = UserStore.getCurrentUser();
  if (null != currentUser) {
    if (null != channel) {
      const isChannelFullResult = require("ChannelUtils").isChannelFull(channel, VoiceStateStore, flag3);
      const check = flag4.getCheck(channel.guild_id);
      if (!check.canChat) {
        if (!tmp14Result.canLurkerListen(channel)) {
          return tmp14(tmp15[11]).unverifiedVoiceGate(check);
        }
        tmp14Result = tmp14(tmp15[10]);
      }
      const tmp4 = require("canJoinVoiceChannel")(channel, PermissionStore);
      if (isChannelFullResult) {
        if (channel.isGuildStageVoice()) {
          if (tmp14Result4.getStageHasMedia(channel.id)) {
            let obj2 = { channel };
            require("ActionSheetActionCreators").openLazy(tmp14(tmp15[16])(tmp15[15], tmp15.paths), STAGE_BOOSTING_SHEET_KEY, obj2);
          }
          tmp14Result4 = tmp14(tmp15[13]);
        }
      }
    }
    require("collectCallFeedback")(() => {
      const v4Result = v1.v4();
      const obj2 = DispatcherDefault;
      obj2.dispatch({ type: "VOICE_CHANNEL_SELECT", guildId, channelId, currentVoiceChannelId: SelectedChannelStore.getVoiceChannelId(), video: flag, stream: flag2, lockVoiceStateForResume: flag3, joinVoiceId: v4Result, bypassIdleUpdate: flag4 });
    }, id, flag2, flag);
  }
};
