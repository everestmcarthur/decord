// Module ID: 13300
// Function ID: 13301
// Name: openEditNoteModal
// Dependencies: [4925, 13301, 1897, 2]
// Exports: default

// Module 13300 (openEditNoteModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4925 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(13301, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
