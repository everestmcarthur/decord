// Module ID: 13192
// Function ID: 13193
// Name: openEditNoteModal
// Dependencies: [4842, 13193, 1897, 2]
// Exports: default

// Module 13192 (openEditNoteModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4842 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(13193, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
