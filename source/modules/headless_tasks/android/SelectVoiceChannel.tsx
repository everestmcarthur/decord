// Module ID: 18022
// Function ID: 18023
// Name: SelectVoiceChannel
// Dependencies: [1957, 4630, 18015, 5463, 4814, 4618, 2]

// Module 18022 (SelectVoiceChannel)
import transitionToChannel from "transitionToChannel" /* 4618 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 4814 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5463 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18015 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4630 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/headless_tasks/android/SelectVoiceChannel.tsx");

export default (arg0) => {
  ({ channelId: require, connectToVoice: importDefault } = arg0);
  return new Promise((arg0) => {
    closure_0 = arg0;
    HeadlessTaskUtilsDefault.awaitStorage(() => {
      if (closure_2_1) {
        const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(closure_2_0);
      }
      if (RTCConnectionStore.getChannelId() === closure_2_0) {
        const channel = ChannelStore.getChannel(tmp5);
        if (null != channel) {
          const result = PrivateChannelCallUtils.navigateToVoiceChannel(channel);
        }
      } else {
        transitionToChannel.transitionToChannel(tmp5);
      }
      closure_0(true);
    });
  });
};
