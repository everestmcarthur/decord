// Module ID: 9701
// Function ID: 9702
// Name: closeCustomKeyboard
// Dependencies: [4506, 2]
// Exports: default

// Module 9701 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 4506 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const bestActiveInputForChannelId = ChatInputUtils.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
