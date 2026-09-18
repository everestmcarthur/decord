// Module ID: 10638
// Function ID: 10639
// Name: showUploadPreviewActionSheet
// Dependencies: [4527, 10639, 1896, 2]
// Exports: default

// Module 10638 (showUploadPreviewActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10639, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
