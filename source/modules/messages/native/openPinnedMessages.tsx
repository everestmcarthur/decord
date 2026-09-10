// Module ID: 11648
// Function ID: 11649
// Name: openPinnedMessages
// Dependencies: [10948, 4432, 2]
// Exports: default

// Module 11648 (openPinnedMessages)
import RootNavigationRef from "RootNavigationRef" /* 4432 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10948 */;
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
