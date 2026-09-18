// Module ID: 14687
// Function ID: 14688
// Name: getCurrentEmbeddedActivityChannel
// Dependencies: [1957, 1958, 2]
// Exports: default

// Module 14687 (getCurrentEmbeddedActivityChannel)
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1957 */;
import ChannelStore from "ChannelStore" /* 1958 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/helpers/getCurrentEmbeddedActivityChannel.tsx");

export default function getCurrentEmbeddedActivityChannel() {
  return ChannelStore.getChannel(EmbeddedActivitiesStore.getConnectedActivityChannelId());
};
