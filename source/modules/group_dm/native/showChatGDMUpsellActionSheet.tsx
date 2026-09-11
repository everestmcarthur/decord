// Module ID: 11695
// Function ID: 11696
// Name: showChatGDMUpsellActionSheet
// Dependencies: [4573, 11696, 1896, 2]
// Exports: default

// Module 11695 (showChatGDMUpsellActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11696, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
