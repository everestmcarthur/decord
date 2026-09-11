// Module ID: 9138
// Function ID: 9139
// Name: people/ClearAllIncomingRequestsConfirmationModal
// Dependencies: [4809, 9139, 1896, 2]
// Exports: default

// Module 9138 (people/ClearAllIncomingRequestsConfirmationModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4809 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(9139, dependencyMap.paths), { incomingPendingRequestCount });
};
