// Module ID: 16190
// Function ID: 16191
// Name: useActiveEventOrStageInstanceChannel
// Dependencies: [1957, 9667, 16189, 2]
// Exports: useActiveEventOrStageInstanceChannel

// Module 16190 (useActiveEventOrStageInstanceChannel)
import useGuildEvents from "useGuildEvents" /* 9667 */;
import useLiveStageChannelsDefault from "useLiveStageChannels" /* 16189 */;
import closure_3 from "ensureGuildLoaded" /* 1957 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_scheduled_events/useActiveEventOrStageInstanceChannel.tsx");

export const useActiveEventOrStageInstanceChannel = function useActiveEventOrStageInstanceChannel(id) {
  let firstActiveEventChannel = useGuildEvents.useFirstActiveEventChannel(id);
  const first = useLiveStageChannelsDefault(id)[0];
  if (first != null) {
    id = first.id;
  }
  if (firstActiveEventChannel == null) {
    firstActiveEventChannel = channel.getChannel(id);
  }
  return firstActiveEventChannel;
};
