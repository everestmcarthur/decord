// Module ID: 10638
// Function ID: 10639
// Name: showUploadPreviewActionSheet
// Dependencies: [4527, 10639, 1896, 2]
// Exports: default

// Module 10638 (showUploadPreviewActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4527 */;

const result = set.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(10639, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
