// Module ID: 13345
// Function ID: 13346
// Name: openEditNoteModal
// Dependencies: [4959, 13346, 1980, 2]
// Exports: default

// Module 13345 (openEditNoteModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4959 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(13346, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
