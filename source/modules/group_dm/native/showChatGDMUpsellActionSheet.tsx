// Module ID: 11731
// Function ID: 11732
// Name: showChatGDMUpsellActionSheet
// Dependencies: [4603, 11732, 1896, 2]
// Exports: default

// Module 11731 (showChatGDMUpsellActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11732, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
