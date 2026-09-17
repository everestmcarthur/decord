// Module ID: 7980
// Function ID: 7981
// Name: showForLaterModal
// Dependencies: [7981, 7982, 4843, 7983, 1897, 2]
// Exports: showForLaterModal

// Module 7980 (showForLaterModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4843 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 7981 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === SavedMessagesTypes.SavedMessageSortTypes.REMINDER) {
    tmp(7982).markRemindersSeen();
    const tmpResult = tmp(7982);
  }
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(7983, dependencyMap.paths), { type: BOOKMARK }, "for-later-modal", { presentation: "modal" });
};
