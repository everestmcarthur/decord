// Module ID: 13092
// Function ID: 13093
// Name: BlockedDomainModalActionCreators
// Dependencies: [4605, 13093, 1897, 2]

// Module 13092 (BlockedDomainModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4605 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13093, dependencyMap.paths), "blocked-domain", { url });
  }
};
