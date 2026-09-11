// Module ID: 11697
// Function ID: 11698
// Name: showChatGDMUpsellActionSheet
// Dependencies: [4574, 11698, 1896, 2]
// Exports: default

// Module 11697 (showChatGDMUpsellActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4574 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11698, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
