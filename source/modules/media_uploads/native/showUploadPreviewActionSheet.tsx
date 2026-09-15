// Module ID: 10766
// Function ID: 10767
// Name: showUploadPreviewActionSheet
// Dependencies: [4606, 10767, 1897, 2]
// Exports: default

// Module 10766 (showUploadPreviewActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4606 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10767, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
