// Module ID: 11013
// Function ID: 11014
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [4574, 4810, 11014, 1896, 2]
// Exports: default

// Module 11013 (showChatGDMCustomizeActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4574 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4810 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(merged) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11014, dependencyMap.paths), merged, "customize-group-dm", { presentation: "modal" });
};
