// Module ID: 18378
// Function ID: 18379
// Name: ToggleDeafen
// Dependencies: [2041, 18375, 10274, 10259, 2]

// Module 18378 (ToggleDeafen)
import VoiceActionUtils from "VoiceActionUtils" /* 10259 */;
import useDeafStates from "useDeafStates" /* 10274 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18375 */;
import ChannelStore from "ChannelStore" /* 2041 */;

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
