// Module ID: 11998
// Function ID: 11999
// Name: showKickConfirmModal
// Dependencies: [4605, 4841, 11999, 1897, 2]
// Exports: default

// Module 11998 (showKickConfirmModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4605 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4841 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_moderation/native/showKickConfirmModal.tsx");

export default function showKickConfirmModal(merged) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11999, dependencyMap.paths), merged);
};
