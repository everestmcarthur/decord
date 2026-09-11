// Module ID: 13149
// Function ID: 13150
// Name: openEditNoteModal
// Dependencies: [4809, 13150, 1896, 2]
// Exports: default

// Module 13149 (openEditNoteModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4809 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(13150, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
