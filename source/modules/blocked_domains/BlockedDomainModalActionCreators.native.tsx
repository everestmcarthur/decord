// Module ID: 12978
// Function ID: 12979
// Name: BlockedDomainModalActionCreators
// Dependencies: [4541, 12979, 1896, 2]

// Module 12978 (BlockedDomainModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4541 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12979, dependencyMap.paths), "blocked-domain", { url });
  }
};
