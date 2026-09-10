// Module ID: 13016
// Function ID: 13017
// Name: SuspiciousDownloadModalActionCreators
// Dependencies: [4572, 13017, 1896, 2]

// Module 13016 (SuspiciousDownloadModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default {
  show(href) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13017, dependencyMap.paths), "suspicious-download", { href });
  }
};
