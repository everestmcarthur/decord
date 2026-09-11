// Module ID: 9638
// Function ID: 9639
// Name: closeCustomKeyboard
// Dependencies: [4472, 2]
// Exports: default

// Module 9638 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 4472 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(channelId) {
  const bestActiveInputForChannelId = ChatInputUtils.getBestActiveInputForChannelId(channelId);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
