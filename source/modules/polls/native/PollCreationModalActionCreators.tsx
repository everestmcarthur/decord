// Module ID: 12292
// Function ID: 12293
// Name: PollCreationModalActionCreators
// Dependencies: [4810, 12293, 1896, 2]
// Exports: closeCreatePollModal, openCreatePollModal

// Module 12292 (PollCreationModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4810 */;
import size from "module_2" /* 2 */;

let c3 = "create-poll-modal";
const result = size.fileFinishedImporting("modules/polls/native/PollCreationModalActionCreators.tsx");

export const openCreatePollModal = function openCreatePollModal(merged) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12293, dependencyMap.paths), merged, c3);
};
export const closeCreatePollModal = function closeCreatePollModal() {
  ModalActionCreatorsDefault.popWithKey(c3);
};
