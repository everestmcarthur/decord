// Module ID: 9117
// Function ID: 9118
// Name: people/ClearAllIncomingRequestsConfirmationModal
// Dependencies: [4808, 9118, 1896, 2]
// Exports: default

// Module 9117 (people/ClearAllIncomingRequestsConfirmationModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4808 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(9118, dependencyMap.paths), { incomingPendingRequestCount });
};
