// Module ID: 7910
// Function ID: 7911
// Name: showForLaterModal
// Dependencies: [7911, 7912, 4808, 7913, 1896, 2]
// Exports: showForLaterModal

// Module 7910 (showForLaterModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4808 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 7911 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === SavedMessagesTypes.SavedMessageSortTypes.REMINDER) {
    tmp(7912).markRemindersSeen();
    const tmpResult = tmp(7912);
  }
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(7913, dependencyMap.paths), { type: BOOKMARK }, "for-later-modal", { presentation: "modal" });
};
