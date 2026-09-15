// Module ID: 9180
// Function ID: 9181
// Name: people/ClearAllIncomingRequestsConfirmationModal
// Dependencies: [4842, 9181, 1897, 2]
// Exports: default

// Module 9180 (people/ClearAllIncomingRequestsConfirmationModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4842 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(9181, dependencyMap.paths), { incomingPendingRequestCount });
};
