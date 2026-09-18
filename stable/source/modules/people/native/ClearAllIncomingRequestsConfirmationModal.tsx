// Module ID: 9054
// Function ID: 9055
// Name: people/ClearAllIncomingRequestsConfirmationModal
// Dependencies: [4763, 9055, 1896, 2]
// Exports: default

// Module 9054 (people/ClearAllIncomingRequestsConfirmationModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(9055, dependencyMap.paths), { incomingPendingRequestCount });
};
