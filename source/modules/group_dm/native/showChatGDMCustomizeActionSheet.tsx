// Module ID: 11011
// Function ID: 11012
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [4573, 4809, 11012, 1896, 2]
// Exports: default

// Module 11011 (showChatGDMCustomizeActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4809 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(merged) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11012, dependencyMap.paths), merged, "customize-group-dm", { presentation: "modal" });
};
