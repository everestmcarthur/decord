// Module ID: 13079
// Function ID: 13080
// Name: BlockedDomainModalActionCreators
// Dependencies: [4603, 13080, 1896, 2]

// Module 13079 (BlockedDomainModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13080, dependencyMap.paths), "blocked-domain", { url });
  }
};
