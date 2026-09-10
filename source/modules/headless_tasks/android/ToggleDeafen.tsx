// Module ID: 18026
// Function ID: 18027
// Name: ToggleDeafen
// Dependencies: [1957, 18023, 10088, 10073, 2]

// Module 18026 (ToggleDeafen)
import VoiceActionUtils from "VoiceActionUtils" /* 10073 */;
import useDeafStates from "useDeafStates" /* 10088 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18023 */;
import ChannelStore from "ChannelStore" /* 1957 */;

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
