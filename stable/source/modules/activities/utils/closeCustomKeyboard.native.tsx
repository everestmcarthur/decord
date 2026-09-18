// Module ID: 9553
// Function ID: 9554
// Name: closeCustomKeyboard
// Dependencies: [4425, 2]
// Exports: default

// Module 9553 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 4425 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(channelId) {
  const bestActiveInputForChannelId = ChatInputUtils.getBestActiveInputForChannelId(channelId);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
