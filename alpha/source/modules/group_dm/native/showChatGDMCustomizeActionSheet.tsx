// Module ID: 11169
// Function ID: 11170
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [4689, 4925, 11170, 1897, 2]
// Exports: default

// Module 11169 (showChatGDMCustomizeActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4689 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4925 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(merged) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11170, dependencyMap.paths), merged, "customize-group-dm", { presentation: "modal" });
};
