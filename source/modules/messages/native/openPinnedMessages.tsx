// Module ID: 11712
// Function ID: 11713
// Name: openPinnedMessages
// Dependencies: [11010, 4465, 2]
// Exports: default

// Module 11712 (openPinnedMessages)
import RootNavigationRef from "RootNavigationRef" /* 4465 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 11010 */;
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
