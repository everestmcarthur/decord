// Module ID: 10876
// Function ID: 10877
// Name: showUploadPreviewActionSheet
// Dependencies: [4689, 10877, 1897, 2]
// Exports: default

// Module 10876 (showUploadPreviewActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4689 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10877, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
