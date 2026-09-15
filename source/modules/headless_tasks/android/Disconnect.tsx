// Module ID: 18082
// Function ID: 18083
// Name: Disconnect
// Dependencies: [1958, 18083, 9214, 2]

// Module 18082 (Disconnect)
import CallsUtils from "CallsUtils" /* 9214 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18083 */;
import ChannelStore from "ChannelStore" /* 1958 */;

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
