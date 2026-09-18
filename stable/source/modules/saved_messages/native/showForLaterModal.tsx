// Module ID: 7860
// Function ID: 7861
// Name: showForLaterModal
// Dependencies: [7861, 7862, 4763, 7863, 1896, 2]
// Exports: showForLaterModal

// Module 7860 (showForLaterModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 7861 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === SavedMessagesTypes.SavedMessageSortTypes.REMINDER) {
    tmp(7862).markRemindersSeen();
    const tmpResult = tmp(7862);
  }
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(7863, dependencyMap.paths), { type: BOOKMARK }, "for-later-modal", { presentation: "modal" });
};
