// Module ID: 12976
// Function ID: 12977
// Name: SuspiciousDownloadModalActionCreators
// Dependencies: [4541, 12977, 1896, 2]

// Module 12976 (SuspiciousDownloadModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4541 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default {
  show(href) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12977, dependencyMap.paths), "suspicious-download", { href });
  }
};
