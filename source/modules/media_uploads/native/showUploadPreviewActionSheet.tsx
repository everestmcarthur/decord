// Module ID: 10724
// Function ID: 10725
// Name: showUploadPreviewActionSheet
// Dependencies: [4574, 10725, 1896, 2]
// Exports: default

// Module 10724 (showUploadPreviewActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4574 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10725, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
