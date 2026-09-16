// Module ID: 12000
// Function ID: 12001
// Name: showBanConfirmModal
// Dependencies: [4605, 4841, 12001, 1897, 2]
// Exports: default

// Module 12000 (showBanConfirmModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4605 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4841 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_moderation/native/showBanConfirmModal.tsx");

export default function showBanConfirmModal(merged) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12001, dependencyMap.paths), merged);
};
