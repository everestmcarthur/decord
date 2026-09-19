// Module ID: 11866
// Function ID: 11867
// Name: openPinnedMessages
// Dependencies: [11179, 4614, 2]
// Exports: default

// Module 11866 (openPinnedMessages)
import RootNavigationRef from "RootNavigationRef" /* 4614 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 11179 */;
import size from "module_2" /* 2 */;

const constants = ChannelDetailsConstants.ChannelDetailsNavigatorScreens;
const result = size.fileFinishedImporting("modules/messages/native/openPinnedMessages.tsx");

export default function openPinnedMessages(channelId, source) {
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  if (tmp) {
    const obj2 = { initialRouteName: constants.PINNED_MESSAGES, channelId, source };
    rootNavigationRef.navigate("sidebar", obj2);
  }
};
