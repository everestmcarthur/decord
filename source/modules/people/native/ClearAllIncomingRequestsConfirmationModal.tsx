// Module ID: 9053
// Function ID: 9054
// Name: openClearAllIncomingRequestsConfirmationModal
// Dependencies: [4763, 9054, 1896, 2]
// Exports: default

// Module 9053 (openClearAllIncomingRequestsConfirmationModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import _modDef4763 from "module_4763" /* 4763 */;

const result = set.fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  let obj = _modDef4763;
  obj = { incomingPendingRequestCount };
  obj.pushLazy(asyncRequireImpl(9054, dependencyMap.paths), obj);
};
