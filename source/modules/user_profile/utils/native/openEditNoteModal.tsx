// Module ID: 13126
// Function ID: 13127
// Name: openEditNoteModal
// Dependencies: [4808, 13127, 1896, 2]
// Exports: default

// Module 13126 (openEditNoteModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4808 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(13127, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
