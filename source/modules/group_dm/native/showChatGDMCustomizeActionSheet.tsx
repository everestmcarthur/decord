// Module ID: 11076
// Function ID: 11077
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [4607, 4843, 11077, 1897, 2]
// Exports: default

// Module 11076 (showChatGDMCustomizeActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4607 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4843 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(merged) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11077, dependencyMap.paths), merged, "customize-group-dm", { presentation: "modal" });
};
