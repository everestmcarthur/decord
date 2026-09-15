// Module ID: 7965
// Function ID: 7966
// Name: showForLaterModal
// Dependencies: [7966, 7967, 4842, 7968, 1897, 2]
// Exports: showForLaterModal

// Module 7965 (showForLaterModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4842 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 7966 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === SavedMessagesTypes.SavedMessageSortTypes.REMINDER) {
    tmp(7967).markRemindersSeen();
    const tmpResult = tmp(7967);
  }
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(7968, dependencyMap.paths), { type: BOOKMARK }, "for-later-modal", { presentation: "modal" });
};
