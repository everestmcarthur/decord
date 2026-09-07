// Module ID: 11607
// Function ID: 11608
// Name: showChatGDMUpsellActionSheet
// Dependencies: [4527, 11608, 1896, 2]
// Exports: default

// Module 11607 (showChatGDMUpsellActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4527 */;

const result = set.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(11608, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
