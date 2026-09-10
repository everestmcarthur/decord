// Module ID: 10703
// Function ID: 10704
// Name: showUploadPreviewActionSheet
// Dependencies: [4572, 10704, 1896, 2]
// Exports: default

// Module 10703 (showUploadPreviewActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10704, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
