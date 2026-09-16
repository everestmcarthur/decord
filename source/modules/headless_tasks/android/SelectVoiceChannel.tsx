// Module ID: 18146
// Function ID: 18147
// Name: SelectVoiceChannel
// Dependencies: [1958, 4661, 18139, 5497, 4845, 4649, 2]

// Module 18146 (SelectVoiceChannel)
import transitionToChannel from "transitionToChannel" /* 4649 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 4845 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5497 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18139 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4661 */;

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
