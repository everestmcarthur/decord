// Module ID: 13078
// Function ID: 13079
// Name: BlockedDomainModalActionCreators
// Dependencies: [4603, 13079, 1896, 2]

// Module 13078 (BlockedDomainModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13079, dependencyMap.paths), "blocked-domain", { url });
  }
};
