// Module ID: 9679
// Function ID: 9680
// Name: closeCustomKeyboard
// Dependencies: [4505, 2]
// Exports: default

// Module 9679 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 4505 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const bestActiveInputForChannelId = ChatInputUtils.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
