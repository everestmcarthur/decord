// Module ID: 8063
// Function ID: 8064
// Name: showForLaterModal
// Dependencies: [8064, 8065, 4925, 8066, 1897, 2]
// Exports: showForLaterModal

// Module 8063 (showForLaterModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4925 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 8064 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === SavedMessagesTypes.SavedMessageSortTypes.REMINDER) {
    tmp(8065).markRemindersSeen();
    const tmpResult = tmp(8065);
  }
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(8066, dependencyMap.paths), { type: BOOKMARK }, "for-later-modal", { presentation: "modal" });
};
