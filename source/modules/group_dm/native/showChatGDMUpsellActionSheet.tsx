// Module ID: 11752
// Function ID: 11753
// Name: showChatGDMUpsellActionSheet
// Dependencies: [4607, 11753, 1897, 2]
// Exports: default

// Module 11752 (showChatGDMUpsellActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4607 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11753, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
