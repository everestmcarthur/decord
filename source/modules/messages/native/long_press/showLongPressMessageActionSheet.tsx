// Module ID: 11799
// Function ID: 11800
// Name: showLongPressMessageActionSheet
// Dependencies: [4605, 11800, 1897, 2]
// Exports: showLongPressMessageActionSheet

// Module 11799 (showLongPressMessageActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4605 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export const showLongPressMessageActionSheet = function showLongPressMessageActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11800, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
};
