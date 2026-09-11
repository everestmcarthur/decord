// Module ID: 10722
// Function ID: 10723
// Name: showUploadPreviewActionSheet
// Dependencies: [4573, 10723, 1896, 2]
// Exports: default

// Module 10722 (showUploadPreviewActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10723, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
