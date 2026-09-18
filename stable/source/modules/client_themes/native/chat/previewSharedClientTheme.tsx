// Module ID: 11950
// Function ID: 11951
// Name: previewSharedClientTheme
// Dependencies: [4527, 11951, 1896, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 11950 (previewSharedClientTheme)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11951, dependencyMap.paths), "custom-theme-preview", { message: message.message, backdropKind: "none" });
};
