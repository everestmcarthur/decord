// Module ID: 9687
// Function ID: 9688
// Name: useMyCurrentStageChannel
// Dependencies: [1957, 2011, 504, 2]
// Exports: default

// Module 9687 (useMyCurrentStageChannel)
import initialize from "initialize" /* 504 */;
import closure_2 from "ensureGuildLoaded" /* 1957 */;
import closure_3 from "handleConnectionOpen" /* 2011 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/stage_channels/useMyCurrentStageChannel.tsx");

export default function useMyCurrentStageChannel() {
  const items = [closure_3, closure_2];
  return initialize.useStateFromStores(items, () => {
    voiceChannelId = voiceChannelId.getVoiceChannelId();
    if (null != voiceChannelId) {
      channel = channel.getChannel(voiceChannelId);
      let isGuildStageVoiceResult;
      if (channel != null) {
        isGuildStageVoiceResult = channel.isGuildStageVoice();
      }
      if (isGuildStageVoiceResult) {
        return channel;
      }
    }
    return null;
  });
};
