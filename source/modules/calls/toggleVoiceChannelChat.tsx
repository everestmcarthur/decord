// Module ID: 14629
// Function ID: 14630
// Name: toggleVoiceChannelChat
// Dependencies: [1958, 4661, 4654, 4839, 2]
// Exports: toggleVoiceChannelChat

// Module 14629 (toggleVoiceChannelChat)
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 4839 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4661 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4654 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/calls/toggleVoiceChannelChat.tsx");

export const toggleVoiceChannelChat = function toggleVoiceChannelChat(open) {
  if (RTCConnectionStore.isConnected()) {
    const channelId = obj.getChannelId();
    if (null == channelId) {
      return null;
    } else {
      const channel = ChannelStore.getChannel(channelId);
      if (null != channel) {
        if (channel.isGuildVoice()) {
          let tmp3 = open;
          if (open == null) {
            tmp3 = !ChannelRTCStore.getChatOpen(channelId);
          }
          ChannelRTCActionCreatorsDefault.updateChatOpen(channelId, tmp3);
          const obj2 = { channelId, chatOpen: tmp3 };
          return obj2;
        }
      }
      return null;
    }
  } else {
    return null;
  }
  obj = RTCConnectionStore;
};
