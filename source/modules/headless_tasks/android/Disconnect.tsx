// Module ID: 17967
// Function ID: 17968
// Name: Disconnect
// Dependencies: [1957, 17968, 9114, 2]

// Module 17967 (Disconnect)
import CallsUtils from "CallsUtils" /* 9114 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 17968 */;
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
