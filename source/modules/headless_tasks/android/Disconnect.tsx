// Module ID: 18296
// Function ID: 18297
// Name: Disconnect
// Dependencies: [1958, 18297, 9320, 2]

// Module 18296 (Disconnect)
import CallsUtils from "CallsUtils" /* 9320 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18297 */;
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
