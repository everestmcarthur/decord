// Module ID: 11857
// Function ID: 11858
// Name: openPinnedMessages
// Dependencies: [11166, 4580, 2]
// Exports: default

// Module 11857 (openPinnedMessages)
import RootNavigationRef from "RootNavigationRef" /* 4580 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 11166 */;
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
