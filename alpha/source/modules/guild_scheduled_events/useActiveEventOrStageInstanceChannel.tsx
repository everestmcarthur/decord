// Module ID: 16520
// Function ID: 16521
// Name: useActiveEventOrStageInstanceChannel
// Dependencies: [2041, 9749, 16519, 2]
// Exports: useActiveEventOrStageInstanceChannel

// Module 16520 (useActiveEventOrStageInstanceChannel)
import useGuildScheduledEvents from "useGuildScheduledEvents" /* 9749 */;
import useLiveStageChannelsDefault from "useLiveStageChannels" /* 16519 */;
import ChannelStore from "ChannelStore" /* 2041 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useActiveEventOrStageInstanceChannel.tsx");

export const useActiveEventOrStageInstanceChannel = function useActiveEventOrStageInstanceChannel(id) {
  let firstActiveEventChannel = useGuildScheduledEvents.useFirstActiveEventChannel(id);
  const first = useLiveStageChannelsDefault(id)[0];
  if (first != null) {
    id = first.id;
  }
  if (firstActiveEventChannel == null) {
    firstActiveEventChannel = ChannelStore.getChannel(id);
  }
  return firstActiveEventChannel;
};
