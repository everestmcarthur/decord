// Module ID: 13041
// Function ID: 13042
// Name: BlockedDomainModalActionCreators
// Dependencies: [4573, 13042, 1896, 2]

// Module 13041 (BlockedDomainModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13042, dependencyMap.paths), "blocked-domain", { url });
  }
};
