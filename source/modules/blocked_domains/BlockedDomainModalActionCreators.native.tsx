// Module ID: 13084
// Function ID: 13085
// Name: BlockedDomainModalActionCreators
// Dependencies: [4606, 13085, 1897, 2]

// Module 13084 (BlockedDomainModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4606 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13085, dependencyMap.paths), "blocked-domain", { url });
  }
};
