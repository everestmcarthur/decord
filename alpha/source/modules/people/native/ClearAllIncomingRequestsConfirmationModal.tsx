// Module ID: 9286
// Function ID: 9287
// Name: people/ClearAllIncomingRequestsConfirmationModal
// Dependencies: [4925, 9287, 1897, 2]
// Exports: default

// Module 9286 (people/ClearAllIncomingRequestsConfirmationModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4925 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(9287, dependencyMap.paths), { incomingPendingRequestCount });
};
