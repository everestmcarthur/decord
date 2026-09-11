// Module ID: 18014
// Function ID: 18015
// Name: Disconnect
// Dependencies: [1957, 18015, 9174, 2]

// Module 18014 (Disconnect)
import CallsUtils from "CallsUtils" /* 9174 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18015 */;
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
