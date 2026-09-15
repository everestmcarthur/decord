// Module ID: 12080
// Function ID: 12081
// Name: previewSharedClientTheme
// Dependencies: [4606, 12081, 1897, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 12080 (previewSharedClientTheme)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4606 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12081, dependencyMap.paths), "custom-theme-preview", { message: message.message, backdropKind: "none" });
};
