// Module ID: 11746
// Function ID: 11747
// Name: openPinnedMessages
// Dependencies: [11047, 4495, 2]
// Exports: default

// Module 11746 (openPinnedMessages)
import RootNavigationRef from "RootNavigationRef" /* 4495 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 11047 */;
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
