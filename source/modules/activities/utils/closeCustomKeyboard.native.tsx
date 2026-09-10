// Module ID: 9617
// Function ID: 9618
// Name: closeCustomKeyboard
// Dependencies: [4470, 2]
// Exports: default

// Module 9617 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 4470 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(channelId) {
  const bestActiveInputForChannelId = ChatInputUtils.getBestActiveInputForChannelId(channelId);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
