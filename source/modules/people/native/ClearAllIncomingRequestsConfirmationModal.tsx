// Module ID: 9080
// Function ID: 9081
// Name: people/ClearAllIncomingRequestsConfirmationModal
// Dependencies: [4777, 9081, 1896, 2]
// Exports: default

// Module 9080 (people/ClearAllIncomingRequestsConfirmationModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4777 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(9081, dependencyMap.paths), { incomingPendingRequestCount });
};
