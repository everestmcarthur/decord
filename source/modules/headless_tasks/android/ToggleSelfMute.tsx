// Module ID: 18143
// Function ID: 18144
// Name: ToggleSelfMute
// Dependencies: [1958, 18139, 7455, 10142, 2]

// Module 18143 (ToggleSelfMute)
import useMuteStates from "useMuteStates" /* 7455 */;
import VoiceActionUtils from "VoiceActionUtils" /* 10142 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18139 */;
import ChannelStore from "ChannelStore" /* 1958 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/headless_tasks/android/ToggleSelfMute.tsx");

export default (channelId) => {
  channelId = channelId.channelId;
  return new Promise((arg0) => {
    closure_0 = arg0;
    HeadlessTaskUtilsDefault.awaitStorage(() => {
      const channel = ChannelStore.getChannel(channelId);
      const muteStates = useMuteStates.getMuteStates({ channel });
      VoiceActionUtils.createMuteHandler(muteStates).onPress();
      closure_0(true);
    });
  });
};
