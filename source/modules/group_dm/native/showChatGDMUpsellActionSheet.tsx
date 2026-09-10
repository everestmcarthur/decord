// Module ID: 11673
// Function ID: 11674
// Name: showChatGDMUpsellActionSheet
// Dependencies: [4572, 11674, 1896, 2]
// Exports: default

// Module 11673 (showChatGDMUpsellActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11674, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
