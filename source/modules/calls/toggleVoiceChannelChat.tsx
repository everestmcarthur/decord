// Module ID: 14567
// Function ID: 14568
// Name: toggleVoiceChannelChat
// Dependencies: [1957, 4630, 4623, 4808, 2]
// Exports: toggleVoiceChannelChat

// Module 14567 (toggleVoiceChannelChat)
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 4808 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4630 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4623 */;

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
