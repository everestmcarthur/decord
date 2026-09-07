// Module ID: 11950
// Function ID: 11951
// Name: handleTapPreviewSharedClientTheme
// Dependencies: [4527, 11951, 1896, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 11950 (handleTapPreviewSharedClientTheme)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4527 */;

const result = set.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(11951, dependencyMap.paths), "custom-theme-preview", { message: message.message, backdropKind: "none" });
};
