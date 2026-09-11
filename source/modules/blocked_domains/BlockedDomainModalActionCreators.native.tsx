// Module ID: 13043
// Function ID: 13044
// Name: BlockedDomainModalActionCreators
// Dependencies: [4574, 13044, 1896, 2]

// Module 13043 (BlockedDomainModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4574 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13044, dependencyMap.paths), "blocked-domain", { url });
  }
};
