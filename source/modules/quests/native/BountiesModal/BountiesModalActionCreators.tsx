// Module ID: 15005
// Function ID: 15006
// Name: BOUNTIES_MODAL_KEY
// Dependencies: [4763, 15006, 1896, 2]

// Module 15005 (BOUNTIES_MODAL_KEY)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import _modDef4763 from "module_4763" /* 4763 */;

const BOUNTIES_MODAL = "BOUNTIES_MODAL";
const result = set.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalActionCreators.tsx");

export default {
  showModal(arg0) {
    ({ bountyId, sourceQuestContent } = arg0);
    _modDef4763.pushLazy(asyncRequireImpl(15006, dependencyMap.paths), { bountyId, sourceQuestContent }, BOUNTIES_MODAL);
  },
  hideModal() {
    _modDef4763.popWithKey(BOUNTIES_MODAL);
  }
};
export const BOUNTIES_MODAL_KEY = "BOUNTIES_MODAL";
