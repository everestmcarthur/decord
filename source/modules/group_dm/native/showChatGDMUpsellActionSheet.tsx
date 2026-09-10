// Module ID: 11633
// Function ID: 11634
// Name: showChatGDMUpsellActionSheet
// Dependencies: [4541, 11634, 1896, 2]
// Exports: default

// Module 11633 (showChatGDMUpsellActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4541 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11634, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
