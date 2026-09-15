// Module ID: 18090
// Function ID: 18091
// Name: SelectVoiceChannel
// Dependencies: [1958, 4662, 18083, 5496, 4846, 4650, 2]

// Module 18090 (SelectVoiceChannel)
import transitionToChannel from "transitionToChannel" /* 4650 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 4846 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5496 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18083 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4662 */;

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
