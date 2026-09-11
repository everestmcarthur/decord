// Module ID: 12041
// Function ID: 12042
// Name: previewSharedClientTheme
// Dependencies: [4574, 12042, 1896, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 12041 (previewSharedClientTheme)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4574 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12042, dependencyMap.paths), "custom-theme-preview", { message: message.message, backdropKind: "none" });
};
