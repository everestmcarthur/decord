// Module ID: 11851
// Function ID: 11852
// Name: showChatGDMUpsellActionSheet
// Dependencies: [4723, 11852, 1980, 2]
// Exports: default

// Module 11851 (showChatGDMUpsellActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11852, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
