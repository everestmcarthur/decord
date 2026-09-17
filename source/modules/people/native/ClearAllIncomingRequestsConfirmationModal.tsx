// Module ID: 9202
// Function ID: 9203
// Name: people/ClearAllIncomingRequestsConfirmationModal
// Dependencies: [4843, 9203, 1897, 2]
// Exports: default

// Module 9202 (people/ClearAllIncomingRequestsConfirmationModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4843 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(9203, dependencyMap.paths), { incomingPendingRequestCount });
};
