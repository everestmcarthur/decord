// Module ID: 13209
// Function ID: 13210
// Name: openEditNoteModal
// Dependencies: [4843, 13210, 1897, 2]
// Exports: default

// Module 13209 (openEditNoteModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4843 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(13210, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
