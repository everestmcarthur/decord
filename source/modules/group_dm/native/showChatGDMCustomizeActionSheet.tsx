// Module ID: 11055
// Function ID: 11056
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [4606, 4842, 11056, 1897, 2]
// Exports: default

// Module 11055 (showChatGDMCustomizeActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4606 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4842 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(merged) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11056, dependencyMap.paths), merged, "customize-group-dm", { presentation: "modal" });
};
