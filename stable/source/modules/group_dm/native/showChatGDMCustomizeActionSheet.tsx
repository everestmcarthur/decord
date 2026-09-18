// Module ID: 10924
// Function ID: 10925
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [4527, 4763, 10925, 1896, 2]
// Exports: default

// Module 10924 (showChatGDMCustomizeActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(merged) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10925, dependencyMap.paths), merged, "customize-group-dm", { presentation: "modal" });
};
