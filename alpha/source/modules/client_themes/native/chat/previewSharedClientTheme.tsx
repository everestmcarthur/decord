// Module ID: 12188
// Function ID: 12189
// Name: previewSharedClientTheme
// Dependencies: [4689, 12189, 1897, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 12188 (previewSharedClientTheme)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4689 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12189, dependencyMap.paths), "custom-theme-preview", { message: message.message, backdropKind: "none" });
};
