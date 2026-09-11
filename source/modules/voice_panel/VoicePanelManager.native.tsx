// Module ID: 17887
// Function ID: 17888
// Name: VoicePanelManager
// Dependencies: [4630, 4815, 7192, 2]

// Module 17887 (VoicePanelManager)
import RTCConnectionStore from "RTCConnectionStore" /* 4630 */;
import VoicePanelStore from "VoicePanelStore" /* 4815 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7192 */;

const prototype = function VoicePanelManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = {
    VOICE_CHANNEL_SELECT() {
      const channelId = RTCConnectionStore.getChannelId();
      if (null != channelId) {
        const state = VoicePanelStore.getState();
        const channels = state.channels;
        if (!channels.has(channelId)) {
          state.openChannel(channelId);
        }
      }
    },
    RTC_CONNECTION_STATE() {
      const channelId = RTCConnectionStore.getChannelId();
      if (null != channelId) {
        const state = VoicePanelStore.getState();
        const channels = state.channels;
        if (!channels.has(channelId)) {
          state.openChannel(channelId);
        }
      }
    }
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
const prototype1 = new prototype();
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/VoicePanelManager.native.tsx");

export default prototype1;
