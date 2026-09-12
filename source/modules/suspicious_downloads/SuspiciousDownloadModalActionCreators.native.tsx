// Module ID: 13076
// Function ID: 13077
// Name: SuspiciousDownloadModalActionCreators
// Dependencies: [4603, 13077, 1896, 2]

// Module 13076 (SuspiciousDownloadModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadModalActionCreators.native.tsx");

export default {
  show(href) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13077, dependencyMap.paths), "suspicious-download", { href });
  }
};
