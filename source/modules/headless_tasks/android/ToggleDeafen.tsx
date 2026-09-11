// Module ID: 18018
// Function ID: 18019
// Name: ToggleDeafen
// Dependencies: [1957, 18015, 10110, 10095, 2]

// Module 18018 (ToggleDeafen)
import VoiceActionUtils from "VoiceActionUtils" /* 10095 */;
import useDeafStates from "useDeafStates" /* 10110 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18015 */;
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
