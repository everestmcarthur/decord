// Module ID: 13239
// Function ID: 13240
// Name: BlockedDomainModalActionCreators
// Dependencies: [4723, 13240, 1980, 2]

// Module 13239 (BlockedDomainModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13240, dependencyMap.paths), "blocked-domain", { url });
  }
};
