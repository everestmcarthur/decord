// Module ID: 13151
// Function ID: 13152
// Name: openEditNoteModal
// Dependencies: [4810, 13152, 1896, 2]
// Exports: default

// Module 13151 (openEditNoteModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4810 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(13152, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
