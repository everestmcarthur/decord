// Module ID: 18019
// Function ID: 18020
// Name: ToggleSelfMute
// Dependencies: [1957, 18015, 7419, 10095, 2]

// Module 18019 (ToggleSelfMute)
import useMuteStates from "useMuteStates" /* 7419 */;
import VoiceActionUtils from "VoiceActionUtils" /* 10095 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18015 */;
import ChannelStore from "ChannelStore" /* 1957 */;

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
