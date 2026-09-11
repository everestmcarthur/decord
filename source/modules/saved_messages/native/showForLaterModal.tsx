// Module ID: 7933
// Function ID: 7934
// Name: showForLaterModal
// Dependencies: [7934, 7935, 4810, 7936, 1896, 2]
// Exports: showForLaterModal

// Module 7933 (showForLaterModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4810 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 7934 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === SavedMessagesTypes.SavedMessageSortTypes.REMINDER) {
    tmp(7935).markRemindersSeen();
    const tmpResult = tmp(7935);
  }
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(7936, dependencyMap.paths), { type: BOOKMARK }, "for-later-modal", { presentation: "modal" });
};
