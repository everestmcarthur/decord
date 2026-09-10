// Module ID: 18030
// Function ID: 18031
// Name: SelectVoiceChannel
// Dependencies: [1957, 4628, 18023, 5461, 4812, 4616, 2]

// Module 18030 (SelectVoiceChannel)
import transitionToChannel from "transitionToChannel" /* 4616 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 4812 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5461 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18023 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4628 */;

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
