// Module ID: 7873
// Function ID: 7874
// Name: showForLaterModal
// Dependencies: [7874, 7875, 4777, 7876, 1896, 2]
// Exports: showForLaterModal

// Module 7873 (showForLaterModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4777 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 7874 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === SavedMessagesTypes.SavedMessageSortTypes.REMINDER) {
    tmp(7875).markRemindersSeen();
    const tmpResult = tmp(7875);
  }
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(7876, dependencyMap.paths), { type: BOOKMARK }, "for-later-modal", { presentation: "modal" });
};
