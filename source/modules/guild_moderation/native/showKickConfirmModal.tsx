// Module ID: 11986
// Function ID: 11987
// Name: showKickConfirmModal
// Dependencies: [4603, 4839, 11987, 1896, 2]
// Exports: default

// Module 11986 (showKickConfirmModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4839 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_moderation/native/showKickConfirmModal.tsx");

export default function showKickConfirmModal(merged) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11987, dependencyMap.paths), merged);
};
