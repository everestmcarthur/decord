// Module ID: 10665
// Function ID: 10666
// Name: showUploadPreviewActionSheet
// Dependencies: [4541, 10666, 1896, 2]
// Exports: default

// Module 10665 (showUploadPreviewActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4541 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10666, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
