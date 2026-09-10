// Module ID: 9579
// Function ID: 9580
// Name: closeCustomKeyboard
// Dependencies: [4439, 2]
// Exports: default

// Module 9579 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 4439 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(channelId) {
  const bestActiveInputForChannelId = ChatInputUtils.getBestActiveInputForChannelId(channelId);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
