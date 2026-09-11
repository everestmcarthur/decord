// Module ID: 11750
// Function ID: 11751
// Name: showLongPressMessageActionSheet
// Dependencies: [4573, 11751, 1896, 2]
// Exports: showLongPressMessageActionSheet

// Module 11750 (showLongPressMessageActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export const showLongPressMessageActionSheet = function showLongPressMessageActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11751, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
};
