// Module ID: 11068
// Function ID: 11069
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [4605, 4841, 11069, 1897, 2]
// Exports: default

// Module 11068 (showChatGDMCustomizeActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4605 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4841 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(merged) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11069, dependencyMap.paths), merged, "customize-group-dm", { presentation: "modal" });
};
