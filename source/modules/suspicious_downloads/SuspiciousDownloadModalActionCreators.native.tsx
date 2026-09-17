// Module ID: 13098
// Function ID: 13099
// Name: SuspiciousDownloadModalActionCreators
// Dependencies: [4607, 13099, 1897, 2]

// Module 13098 (SuspiciousDownloadModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4607 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default {
  show(href) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13099, dependencyMap.paths), "suspicious-download", { href });
  }
};
