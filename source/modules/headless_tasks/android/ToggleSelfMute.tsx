// Module ID: 18027
// Function ID: 18028
// Name: ToggleSelfMute
// Dependencies: [1957, 18023, 7397, 10073, 2]

// Module 18027 (ToggleSelfMute)
import useMuteStates from "useMuteStates" /* 7397 */;
import VoiceActionUtils from "VoiceActionUtils" /* 10073 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18023 */;
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
