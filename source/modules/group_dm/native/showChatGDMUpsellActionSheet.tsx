// Module ID: 11736
// Function ID: 11737
// Name: showChatGDMUpsellActionSheet
// Dependencies: [4606, 11737, 1897, 2]
// Exports: default

// Module 11736 (showChatGDMUpsellActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4606 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMUpsellActionSheet.tsx");

export default function showChatGDMUpsellActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11737, dependencyMap.paths), "ChatGDMUpsellActionSheet", arg0);
};
