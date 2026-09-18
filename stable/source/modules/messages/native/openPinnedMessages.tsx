// Module ID: 11622
// Function ID: 11623
// Name: openPinnedMessages
// Dependencies: [10921, 4418, 2]
// Exports: default

// Module 11622 (openPinnedMessages)
import RootNavigationRef from "RootNavigationRef" /* 4418 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10921 */;
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
