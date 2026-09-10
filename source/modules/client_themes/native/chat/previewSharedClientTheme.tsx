// Module ID: 12016
// Function ID: 12017
// Name: previewSharedClientTheme
// Dependencies: [4572, 12017, 1896, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 12016 (previewSharedClientTheme)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12017, dependencyMap.paths), "custom-theme-preview", { message: message.message, backdropKind: "none" });
};
