// Module ID: 11759
// Function ID: 11760
// Name: openPinnedMessages
// Dependencies: [11065, 4496, 2]
// Exports: default

// Module 11759 (openPinnedMessages)
import RootNavigationRef from "RootNavigationRef" /* 4496 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 11065 */;
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
