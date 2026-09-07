// Module ID: 12376
// Function ID: 12377
// Name: useCanSeeEventsInChannelList
// Dependencies: [9678, 9667, 12377, 2]
// Exports: default

// Module 12376 (useCanSeeEventsInChannelList)
import set from "set" /* 2 */;
import useCanCreateAnEventDefault from "useCanCreateAnEvent" /* 9678 */;
import useIsHubForGuildDefault from "useIsHubForGuild" /* 12377 */;

const result = set.fileFinishedImporting("modules/guild_scheduled_events/useCanSeeEventsInChannelList.tsx");

export default function useCanSeeEventsInChannelList(arg0) {
  let tmp = useCanCreateAnEventDefault(arg0);
  const tmp2 = useIsHubForGuildDefault(arg0);
  let tmp3 = !tmp2;
  if (!tmp2) {
    if (!tmp) {
      tmp = arr.length > 0;
    }
    tmp3 = tmp;
  }
  return tmp3;
};
