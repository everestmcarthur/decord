// Module ID: 11607
// Function ID: 11608
// Name: showChatGDMUpsellActionSheet
// Dependencies: [4527, 11608, 1896, 2]
// Exports: default

// Module 11607 (showChatGDMUpsellActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11608, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
