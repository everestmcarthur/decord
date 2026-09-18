// Module ID: 11842
// Function ID: 11843
// Name: showChatGDMUpsellActionSheet
// Dependencies: [4689, 11843, 1897, 2]
// Exports: default

// Module 11842 (showChatGDMUpsellActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4689 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11843, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
