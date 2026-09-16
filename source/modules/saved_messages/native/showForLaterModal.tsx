// Module ID: 7974
// Function ID: 7975
// Name: showForLaterModal
// Dependencies: [7975, 7976, 4841, 7977, 1897, 2]
// Exports: showForLaterModal

// Module 7974 (showForLaterModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4841 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 7975 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === SavedMessagesTypes.SavedMessageSortTypes.REMINDER) {
    tmp(7976).markRemindersSeen();
    const tmpResult = tmp(7976);
  }
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(7977, dependencyMap.paths), { type: BOOKMARK }, "for-later-modal", { presentation: "modal" });
};
