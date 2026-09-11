// Module ID: 15057
// Function ID: 15058
// Name: BountiesModalActionCreators
// Dependencies: [4810, 15058, 1896, 2]

// Module 15057 (BountiesModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4810 */;
import size from "module_2" /* 2 */;

const BOUNTIES_MODAL = "BOUNTIES_MODAL";
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalActionCreators.tsx");

export default {
  showModal(arg0) {
    ({ bountyId, sourceQuestContent, variant } = arg0);
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(15058, dependencyMap.paths), { bountyId, sourceQuestContent, variant }, BOUNTIES_MODAL);
  },
  hideModal() {
    ModalActionCreatorsDefault.popWithKey(BOUNTIES_MODAL);
  }
};
export const BOUNTIES_MODAL_KEY = "BOUNTIES_MODAL";
