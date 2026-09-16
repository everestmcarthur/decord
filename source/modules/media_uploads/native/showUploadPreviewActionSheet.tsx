// Module ID: 10774
// Function ID: 10775
// Name: showUploadPreviewActionSheet
// Dependencies: [4605, 10775, 1897, 2]
// Exports: default

// Module 10774 (showUploadPreviewActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4605 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10775, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
