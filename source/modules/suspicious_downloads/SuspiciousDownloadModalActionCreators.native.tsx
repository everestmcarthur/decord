// Module ID: 13041
// Function ID: 13042
// Name: SuspiciousDownloadModalActionCreators
// Dependencies: [4574, 13042, 1896, 2]

// Module 13041 (SuspiciousDownloadModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4574 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default {
  show(href) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13042, dependencyMap.paths), "suspicious-download", { href });
  }
};
