// Module ID: 9140
// Function ID: 9141
// Name: people/ClearAllIncomingRequestsConfirmationModal
// Dependencies: [4810, 9141, 1896, 2]
// Exports: default

// Module 9140 (people/ClearAllIncomingRequestsConfirmationModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4810 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(9141, dependencyMap.paths), { incomingPendingRequestCount });
};
