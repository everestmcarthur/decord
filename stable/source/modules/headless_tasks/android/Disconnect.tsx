// Module ID: 17934
// Function ID: 17935
// Name: Disconnect
// Dependencies: [1957, 17935, 9088, 2]

// Module 17934 (Disconnect)
import CallsUtils from "CallsUtils" /* 9088 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 17935 */;
import ChannelStore from "ChannelStore" /* 1957 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/headless_tasks/android/Disconnect.tsx");

export default (channelId) => {
  channelId = channelId.channelId;
  return new Promise((arg0) => {
    closure_0 = arg0;
    HeadlessTaskUtilsDefault.awaitStorage(() => {
      const channel = ChannelStore.getChannel(channelId);
      if (null != channel) {
        CallsUtils.handleDisconnect(channel);
      }
      closure_0(true);
    });
  });
};
