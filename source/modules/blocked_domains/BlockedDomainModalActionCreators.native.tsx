// Module ID: 13191
// Function ID: 13192
// Name: BlockedDomainModalActionCreators
// Dependencies: [4689, 13192, 1897, 2]

// Module 13191 (BlockedDomainModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4689 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx");

export default {
  show(url) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13192, dependencyMap.paths), "blocked-domain", { url });
  }
};
