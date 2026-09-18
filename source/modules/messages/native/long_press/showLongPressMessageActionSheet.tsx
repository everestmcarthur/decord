// Module ID: 11897
// Function ID: 11898
// Name: showLongPressMessageActionSheet
// Dependencies: [4689, 11898, 1897, 2]
// Exports: showLongPressMessageActionSheet

// Module 11897 (showLongPressMessageActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4689 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export const showLongPressMessageActionSheet = function showLongPressMessageActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11898, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
};
