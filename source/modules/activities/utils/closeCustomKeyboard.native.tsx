// Module ID: 9690
// Function ID: 9691
// Name: closeCustomKeyboard
// Dependencies: [4504, 2]
// Exports: default

// Module 9690 (closeCustomKeyboard)
import ChatInputUtils from "ChatInputUtils" /* 4504 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/closeCustomKeyboard.native.tsx");

export default function closeCustomKeyboard(id) {
  const bestActiveInputForChannelId = ChatInputUtils.getBestActiveInputForChannelId(id);
  if (bestActiveInputForChannelId != null) {
    bestActiveInputForChannelId.closeCustomKeyboard();
  }
};
