// Module ID: 12950
// Function ID: 12951
// Name: SuspiciousDownloadModalActionCreators
// Dependencies: [4527, 12951, 1896, 2]

// Module 12950 (SuspiciousDownloadModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default {
  show(href) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12951, dependencyMap.paths), "suspicious-download", { href });
  }
};
