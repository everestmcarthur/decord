// Module ID: 8101
// Function ID: 8102
// Name: showForLaterModal
// Dependencies: [8102, 8103, 4959, 8104, 1980, 2]
// Exports: showForLaterModal

// Module 8101 (showForLaterModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4959 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 8102 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === SavedMessagesTypes.SavedMessageSortTypes.REMINDER) {
    tmp(8103).markRemindersSeen();
    const tmpResult = tmp(8103);
  }
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(8104, dependencyMap.paths), { type: BOOKMARK }, "for-later-modal", { presentation: "modal" });
};
