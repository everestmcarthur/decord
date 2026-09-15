// Module ID: 11751
// Function ID: 11752
// Name: openPinnedMessages
// Dependencies: [11052, 4498, 2]
// Exports: default

// Module 11751 (openPinnedMessages)
import RootNavigationRef from "RootNavigationRef" /* 4498 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 11052 */;
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
