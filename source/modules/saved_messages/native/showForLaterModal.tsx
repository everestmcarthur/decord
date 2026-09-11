// Module ID: 7932
// Function ID: 7933
// Name: showForLaterModal
// Dependencies: [7933, 7934, 4809, 7935, 1896, 2]
// Exports: showForLaterModal

// Module 7932 (showForLaterModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4809 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 7933 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === SavedMessagesTypes.SavedMessageSortTypes.REMINDER) {
    tmp(7934).markRemindersSeen();
    const tmpResult = tmp(7934);
  }
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(7935, dependencyMap.paths), { type: BOOKMARK }, "for-later-modal", { presentation: "modal" });
};
