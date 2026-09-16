// Module ID: 18142
// Function ID: 18143
// Name: ToggleDeafen
// Dependencies: [1958, 18139, 10157, 10142, 2]

// Module 18142 (ToggleDeafen)
import VoiceActionUtils from "VoiceActionUtils" /* 10142 */;
import useDeafStates from "useDeafStates" /* 10157 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18139 */;
import ChannelStore from "ChannelStore" /* 1958 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/headless_tasks/android/ToggleDeafen.tsx");

export default (channelId) => {
  channelId = channelId.channelId;
  return new Promise((arg0) => {
    closure_0 = arg0;
    HeadlessTaskUtilsDefault.awaitStorage(() => {
      const channel = ChannelStore.getChannel(channelId);
      const deafStates = useDeafStates.getDeafStates(channel);
      VoiceActionUtils.createDeafHandler(deafStates).onPress();
      closure_0(true);
    });
  });
};
