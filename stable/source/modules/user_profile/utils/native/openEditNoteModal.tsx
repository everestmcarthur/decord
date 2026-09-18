// Module ID: 13060
// Function ID: 13061
// Name: openEditNoteModal
// Dependencies: [4763, 13061, 1896, 2]
// Exports: default

// Module 13060 (openEditNoteModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(13061, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};
