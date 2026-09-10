// Module ID: 11688
// Function ID: 11689
// Name: openPinnedMessages
// Dependencies: [10988, 4463, 2]
// Exports: default

// Module 11688 (openPinnedMessages)
import RootNavigationRef from "RootNavigationRef" /* 4463 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10988 */;
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
