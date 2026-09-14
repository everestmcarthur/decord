// Module ID: 13077
// Function ID: 13078
// Name: SuspiciousDownloadModalActionCreators
// Dependencies: [4603, 13078, 1896, 2]

// Module 13077 (SuspiciousDownloadModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default {
  show(href) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13078, dependencyMap.paths), "suspicious-download", { href });
  }
};
