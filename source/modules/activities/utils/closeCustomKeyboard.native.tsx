// Module ID: 9795
// Function ID: 9796
// Name: closeCustomKeyboard
// Dependencies: [4588, 2]
// Exports: default

// Module 9795 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 4588 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const bestActiveInputForChannelId = ChatInputUtils.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
