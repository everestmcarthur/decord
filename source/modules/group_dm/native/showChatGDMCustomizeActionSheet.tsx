// Module ID: 10991
// Function ID: 10992
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [4572, 4808, 10992, 1896, 2]
// Exports: default

// Module 10991 (showChatGDMCustomizeActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4572 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4808 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(merged) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10992, dependencyMap.paths), merged, "customize-group-dm", { presentation: "modal" });
};
