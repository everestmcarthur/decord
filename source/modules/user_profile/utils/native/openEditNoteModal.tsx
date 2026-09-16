// Module ID: 13201
// Function ID: 13202
// Name: openEditNoteModal
// Dependencies: [4841, 13202, 1897, 2]
// Exports: default

// Module 13201 (openEditNoteModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4841 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(13202, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
